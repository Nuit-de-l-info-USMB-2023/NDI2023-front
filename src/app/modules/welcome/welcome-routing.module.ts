import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';

const routes: Routes = [{ path: '', component: WelcomeDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
