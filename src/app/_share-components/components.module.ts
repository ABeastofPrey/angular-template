import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { UploaderComponent } from './uploader/uploader.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    ButtonComponent,
    UploaderComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    UploaderComponent,
    MessagesComponent
  ]
})
export class ComponentsModule { }
