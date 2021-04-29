import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/_share-models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users$!: Observable<User[]>;
  public selectedId: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users$ = this.route.data.pipe(map(data => data.users));
  }

  public select(id: number): void {
    this.selectedId = id;
  }
}
