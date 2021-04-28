import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModuleStrategyService } from './_share-services';
import { AuthGuard } from './_share-services';

const routes: Routes = [
  {
    path: 'auth',
    data: { preload: true },
    loadChildren: () => import('./core-features/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '',
    data: { preload: true },
    canActivate: [AuthGuard],
    loadChildren: () => import('./core-features/core.module').then(m => m.CoreModule)
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
