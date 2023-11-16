import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import {ModalModule} from "../lib/modal/modal.module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        RouterModule,
        SharedModule,
        AppRoutingModule,
        ModalModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
