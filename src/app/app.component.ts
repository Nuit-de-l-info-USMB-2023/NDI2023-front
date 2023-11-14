import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService
      .isTokenValid()
      .subscribe(res => {
        if (!res) {
          this.authService.logout();
        }
      });
  }
}
