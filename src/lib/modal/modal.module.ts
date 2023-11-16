import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Modal} from "./components/modal/modal.component";
import {ModalInjector} from "./components/modal-injector/modal-injector.component";
import {ModalService} from "./services/modal.service";



@NgModule({
  declarations: [Modal, ModalInjector],
  providers: [ModalService],
  imports: [
    CommonModule
  ],
  exports: [Modal, ModalInjector]
})
export class ModalModule { }
