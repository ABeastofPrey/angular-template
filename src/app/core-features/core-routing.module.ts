import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'user-dashboard',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  }, {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
