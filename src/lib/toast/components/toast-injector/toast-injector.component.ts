import {AfterViewInit, Component, ViewChildren} from '@angular/core';
import {ToastX, ToastY} from "../../models/toast-responsive";
import {ToastComponent} from "../toast/toast.component";
import {LoginFormComponent} from "../../../../app/modules/authentification/login-form/login-form.component";
import {ToastItemConfig} from "../../models/toast-config";
import {AlertType} from "../../../alert/components/alert/alert.component";

@Component({
  selector: 'app-toast-injector',
  templateUrl: './toast-injector.component.html',
  styleUrls: ['./toast-injector.component.scss']
})
export class ToastInjectorComponent implements AfterViewInit{

  @ViewChildren(ToastComponent) toastComponents!: ToastComponent[];

  protected readonly ToastX = ToastX;
  protected readonly ToastY = ToastY;

  ngAfterViewInit() {
    this.addAlert(LoginFormComponent,{
      alertType: AlertType.INFO,
      duration: 5000,
    });
  }


  addAlert(component:any, options:ToastItemConfig){
    this.toastComponents.forEach((toastComponent: ToastComponent) => {
      let coords = options.coords || [ToastX.END, ToastY.BOTTOM];
      if(toastComponent.coordinate[0] === coords[0] && toastComponent.coordinate[1] === coords[1]){
        toastComponent.addToast(component, options);
      }
    });
  }
}
