import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/_share-models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserCenterService } from '../../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users$!: Observable<User[]>;
  public selectedId!: number;

  constructor(private service: UserCenterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.users$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +(params.get('id') as string) + 1;
        return this.service.getUsers();
      })
    )
  }

  public select(id: number): void {
    this.selectedId = id;
  }
}
