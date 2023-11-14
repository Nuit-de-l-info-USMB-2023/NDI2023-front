import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: {'class': "sticky top-0 z-30 flex h-16 w-full mb-10 justify-center bg-opacity-90 backdrop-blur transition-all duration-100 text-base-content"}
})
export class NavBarComponent{

  connected$:Observable<boolean>;

  constructor(public readonly authService: AuthService) {
    this.connected$ = authService.connected$;
  }
}
