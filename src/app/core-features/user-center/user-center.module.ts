import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterRoutingModule } from './user-center-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    UserListComponent, UserInfoComponent, UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserCenterRoutingModule
  ]
})
export class UserCenterModule { }
