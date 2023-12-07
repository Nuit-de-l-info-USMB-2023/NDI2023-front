import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import {BaseComponent} from "../../../core/components/base/base.component";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent extends BaseComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  loginForm!: FormGroup;
  errorMessage: string = '';
  errorInForm: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    super();
  }

  async handleSubmitForm() {
    this.authService
      .login(this.loginForm.value.login, this.loginForm.value.password)
      .pipe(takeUntil(this.destroy$))
      .subscribe(loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/home']);
        } else {
          this.errorInForm = true;
          this.errorMessage = 'Invalid credentials';
        }
      });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  handleCancel() {
    this.onCancel.emit();
  }
}
