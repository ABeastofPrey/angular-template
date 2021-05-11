import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersResolverService } from './services';

const routes: Routes = [{
  path: '',
  component: UserDashboardComponent,
  children: [{
    path: '',
    component: UserListComponent,
    resolve: {
      users: UsersResolverService
    },
    children: [{
      path: ':id',
      component: UserInfoComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCenterRoutingModule { }
