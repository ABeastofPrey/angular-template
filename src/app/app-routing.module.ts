import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModuleStrategyService } from './_share-services';
import { AuthGuard } from './_share-gards';

const routes: Routes = [
  {
    path: 'auth',
    data: { preload: true },
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '',
    data: { preload: true },
    canLoad: [AuthGuard],
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  }, {
    path: 'pages',
    data: { preload: true },
    loadChildren: () => import('./_share-pages/pages.module').then(m => m.PagesModule)
  }, {
    path: '**', redirectTo: 'pages', pathMatch: 'full'
  }
];

@NgModule({
  providers: [PreloadModuleStrategyService],
  imports: [
    RouterModule.forRoot(routes, {
    // relativeLinkResolution: 'legacy',
    preloadingStrategy: PreloadModuleStrategyService,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
