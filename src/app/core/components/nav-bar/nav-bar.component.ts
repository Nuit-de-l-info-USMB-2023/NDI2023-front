import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Observable} from "rxjs";
import {ModalService} from "../../../../lib/modal/services/modal.service";
import {AuthModalComponent} from "../../../modules/authentification/auth-modal/auth-modal.component";
import {ThemeService} from "../../../../lib/theme/service/theme.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: {'class': "sticky top-0 z-30 flex h-16 w-full mb-10 justify-center bg-opacity-90 backdrop-blur transition-all duration-100 text-base-content"}
})
export class NavBarComponent{

  connected$:Observable<boolean>;

  theme?:string;

  constructor(public readonly authService: AuthService, private modalService: ModalService, private themeService: ThemeService) {
    this.connected$ = authService.connected$;
    this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }

  openDialogAuth() {
    let dialogRef = this.modalService.open(AuthModalComponent);

    dialogRef.subscribe((result) => {
      console.log(result);
    });
  }

  setTheme(theme: string) {
    this.themeService.setTheme(theme)
  }
}
