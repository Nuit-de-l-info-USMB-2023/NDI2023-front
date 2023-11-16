import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './guards/module-import.gard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BaseComponent } from './components/base/base.component';
import {AuthentificationModule} from "../modules/authentification/authentification.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    NavBarComponent,
    SideBarComponent,
    BaseComponent,
  ],
    imports: [CommonModule, HttpClientModule, RouterModule, AuthentificationModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
    exports: [
        LoadingComponent,
        NotFoundComponent,
        NavBarComponent,
        SideBarComponent,
    ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
