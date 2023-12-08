import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [WelcomeDialogComponent],
  imports: [CommonModule, WelcomeRoutingModule, NgOptimizedImage],
  exports: [WelcomeDialogComponent],
})
export class WelcomeModule {}
