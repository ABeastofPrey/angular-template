import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModuleStrategyService } from './share/services';
import { AuthGuard } from './share/services';

const routes: Routes = [
  {
    path: 'auth',
    data: { preload: true },
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '',
    data: { preload: true },
    canActivate: [AuthGuard],
    loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule)
  }, {
    path: '**', redirectTo: 'pages', pathMatch: 'full'
  }
];

@NgModule({
  providers: [PreloadModuleStrategyService],
  imports: [
    RouterModule.forRoot(
      routes
      , {
        // relativeLinkResolution: 'legacy',
        preloadingStrategy: PreloadModuleStrategyService
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
