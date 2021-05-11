import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MainComponent } from './main/main.component';
import { NzModule } from '@app/_share-3rd-modules';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NzModule
  ]
})
export class FeaturesModule { }
