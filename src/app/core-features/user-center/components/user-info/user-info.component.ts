import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/_share-models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserCenterService } from '../../services';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public user$!: Observable<User | null>;

  constructor(private router: Router, private route: ActivatedRoute, private service: UserCenterService) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') as string;
        return this.service.getUserById(+id);
      })
    );
  }

}
