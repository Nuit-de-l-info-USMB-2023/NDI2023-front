import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  login = '';

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService
      .getProfile()
      .subscribe(payload => {
        this.login = payload.login;
      });
  }

  logout() {
    this.authService.logout();
    //this.router.navigate([ROUTES.authentification + '/login']);
  }
}
