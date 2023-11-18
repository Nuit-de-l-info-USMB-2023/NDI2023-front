import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth/auth.service';
import {takeUntil} from 'rxjs';
import {BaseComponent} from "./core/components/base/base.component";
import {ToastService} from "../lib/toast/services/toast.service";
import {AlertType} from "../lib/alert/models/alert-type";
import {LoginFormComponent} from "./modules/authentification/login-form/login-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private readonly authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.authService
      .isTokenValid()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (!res) {
          this.authService.logout();
        }
      });
  }
}
