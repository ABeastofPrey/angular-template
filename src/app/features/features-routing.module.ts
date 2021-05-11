import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@app/_share-gards';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  canDeactivate: [CanDeactivateGuard],
  children: [{
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'user-dashboard',
    loadChildren: () => import('./user-center/user-center.module').then(m => m.UserCenterModule)
  }, {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
