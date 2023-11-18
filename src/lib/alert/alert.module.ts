import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { MessageComponent } from './components/message/message.component';



@NgModule({
  declarations: [
    AlertComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    MessageComponent
  ]
})
export class AlertModule { }
