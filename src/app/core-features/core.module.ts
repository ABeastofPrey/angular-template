import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MainComponent } from './main/main.component';
import { NzModule } from '@app/_share-3rd-modules';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NzModule
  ]
})
export class CoreModule { }
