import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, {
  path: 'user-dashboard',
  loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
}, {
  path: 'profile',
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
