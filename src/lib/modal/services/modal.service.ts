import {
  ComponentRef,
  Inject,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, Observable, take} from 'rxjs';
import { DOCUMENT } from '@angular/common';
import {
  ModalOptions,
} from '../models/modal-options';
import {Modal} from "../components/modal/modal.component";

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals: ComponentRef<any>[] = [];
  public viewContainerRef!: ViewContainerRef;

  isOpenSubject: BehaviorSubject<boolean>;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.isOpenSubject = new BehaviorSubject<boolean>(false);
  }

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }

  get isOpen$(): Observable<boolean> {
    return this.isOpenSubject.asObservable();
  }

  open(content: any, options?: ModalOptions) {
    this.isOpenSubject.next(true);
    this.document.body.style.overflow = 'hidden';
    const modal = this.viewContainerRef.createComponent(content);
    if (options) {
      (modal.instance as Modal).options = options;
    }
    this.modals.push(modal);

    //destroy modal when close event is emitted
    (modal.instance as Modal).closeEvent
      .pipe(take(1))
      .subscribe(() => {
        this.destroyModal(modal);
        this.isOpenSubject.next(false);
      });

    //get input checkbox with id my_modal
    const modalCheckbox = document.getElementById('my_modal');
    if(modalCheckbox){
      modalCheckbox.click();
    }

    return (modal.instance as Modal).closeEvent
      .asObservable()
      .pipe(take(1));
  }

  private destroyModal(modal: ComponentRef<any>) {
    modal?.destroy();
    this.modals = this.modals.filter(m => m !== modal);
    if (this.modals.length === 0) {
      this.document.body.style.overflow = 'auto';
    }
  }

  closeAll() {
    this.isOpenSubject.next(false);
    for (let i = this.modals.length - 1; i === 0; i--) {
      let modal = this.modals[i];
      modal?.destroy();
    }
    this.modals = [];
    this.document.body.style.overflow = 'auto';
  }
}
