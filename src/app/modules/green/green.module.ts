import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenComponent } from './components/presenters/green/green.component';



@NgModule({
  declarations: [
    GreenComponent,
  ],
  exports: [
    GreenComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class GreenModule { }
