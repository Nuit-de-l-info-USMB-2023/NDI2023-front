import { Component } from '@angular/core';
import {Modal} from "../../../../lib/modal/components/modal/modal.component";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent extends Modal {

  constructor() {
    super();
  }

  handleClose(){
    this.closeEvent.emit({
      success: false,
      data: null,
      message: "close modal"
    });
  }

}
