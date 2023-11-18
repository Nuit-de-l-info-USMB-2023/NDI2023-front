import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastInjectorComponent } from './components/toast-injector/toast-injector.component';
import { ToastComponent } from './components/toast/toast.component';
import {AlertModule} from "../alert/alert.module";



@NgModule({
  declarations: [
    ToastInjectorComponent,
    ToastComponent
  ],
  exports: [
    ToastInjectorComponent
  ],
  imports: [
    CommonModule,
    AlertModule
  ]
})
export class ToastModule { }
