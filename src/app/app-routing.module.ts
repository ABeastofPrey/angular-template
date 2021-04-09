import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: 'pages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    // , { relativeLinkResolution: 'legacy' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
