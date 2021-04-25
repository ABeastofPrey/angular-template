import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { ComponentsModule } from './_components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShareRoutingModule,
    ComponentsModule,
  ],
  exports: [
    ComponentsModule
  ]
})
export class ShareModule { }
