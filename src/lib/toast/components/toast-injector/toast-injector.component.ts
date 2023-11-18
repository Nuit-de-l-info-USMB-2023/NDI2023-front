import {AfterViewInit, Component, ViewChildren} from '@angular/core';
import {ToastX, ToastY} from "../../models/toast-responsive";
import {ToastComponent} from "../toast/toast.component";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'ad-toast-injector',
  templateUrl: './toast-injector.component.html',
  styleUrls: ['./toast-injector.component.scss']
})
export class ToastInjectorComponent implements AfterViewInit{

  @ViewChildren(ToastComponent) toastComponents!: ToastComponent[];

  protected readonly ToastX = ToastX;
  protected readonly ToastY = ToastY;

  constructor(private toastService: ToastService) { }

  ngAfterViewInit() {
    this.toastService.toastComponents = this.toastComponents;
  }
}
