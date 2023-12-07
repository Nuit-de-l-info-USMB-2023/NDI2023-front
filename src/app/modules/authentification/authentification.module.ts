import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, AuthModalComponent, AuthFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [
    LoginFormComponent
  ]
})
export class AuthentificationModule {}
