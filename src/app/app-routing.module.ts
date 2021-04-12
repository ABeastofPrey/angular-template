import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModuleStrategyService } from './share/services/preload-module-strategy/preload-module-strategy.service';

const routes: Routes = [
  {
    path: 'auth',
    data: { preload: true },
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '',
    data: { preload: true },
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
