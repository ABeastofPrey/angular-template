import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { ComponentsModule } from '@app/_share-components/components.module';
import { NzModule } from '@app/_share-3rd-modules';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NzModule
  ],
  exports: [ ]
})
export class HomeModule { }
