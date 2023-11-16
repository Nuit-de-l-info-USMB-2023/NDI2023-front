import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastInjectorComponent } from './components/toast-injector/toast-injector.component';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    ToastInjectorComponent,
    ToastComponent
  ],
  exports: [
    ToastInjectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToastModule { }
