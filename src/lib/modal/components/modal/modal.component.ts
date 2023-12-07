import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalPayload } from '../../models/modal-payload';
import {
  DEFAULT_MODAL_OPTIONS,
  ModalOptions,
} from '../../models/modal-options';

@Component({
  template: '',
})
export class Modal{
  @Input() options: ModalOptions = DEFAULT_MODAL_OPTIONS;

  @Output() closeEvent = new EventEmitter<ModalPayload>();

  onClose(event: ModalPayload) {
    this.closeEvent.emit(event);
  }
}
