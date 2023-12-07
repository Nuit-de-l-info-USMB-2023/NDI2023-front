import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import {ModalModule} from "../lib/modal/modal.module";
import {ToastModule} from "../lib/toast/toast.module";
import {CommonModule} from "@angular/common";
import {ThemeModule} from "../lib/theme/theme.module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        CoreModule,
        RouterModule,
        SharedModule,
        AppRoutingModule,
        ModalModule,
        ToastModule,
        ThemeModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
