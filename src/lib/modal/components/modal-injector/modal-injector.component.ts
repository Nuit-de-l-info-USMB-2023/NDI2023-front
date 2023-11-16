import {
  AfterViewInit,
  Component, OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

interface checkModal {
  value: boolean;
}

@Component({
  selector: 'app-modal-injector',
  templateUrl: './modal-injector.component.html',
  styleUrls: ['./modal-injector.component.scss'],
})
export class ModalInjector implements AfterViewInit, OnInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  checkModal$: Observable<checkModal> = of({ value: false });

  constructor(private readonly modalService: ModalService) {
  }

  ngOnInit(): void {
    this.checkModal$ = this.modalService
      .isOpen$
      .pipe(
        map((v: boolean) => {
          return { value :v };
        })
      );
  }

  ngAfterViewInit(): void {
    this.modalService.viewContainerRef = this.modalContainer;
  }

  handleCloseModal() {
    this.modalService.closeAll();
  }
}
