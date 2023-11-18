import {Injectable} from '@angular/core';
import {ToastItemConfig} from "../models/toast-config";
import {ToastComponent} from "../components/toast/toast.component";
import {ToastX, ToastY} from "../models/toast-responsive";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastComponents?: ToastComponent[];


  constructor() { }


  checkToastComponents(){
    if(this.toastComponents === undefined){
      console.error('No toast component found, please add <toast-injector/> component in your app.component.html. If you have already added, please wait for the view to be initialized.');
      return false;
    }
    return true;
  }


  addComponent(name:string, component: any, options?: ToastItemConfig){
    if (!this.checkToastComponents()) return;
    this.toastComponents?.forEach((toastComponent: ToastComponent) => {
      let coords = options?.coords || [ToastX.END, ToastY.BOTTOM];
      if(toastComponent.coordinate[0] === coords[0] && toastComponent.coordinate[1] === coords[1]){
        toastComponent.addComponent(name, component, options);
      }
    });
  }

  removeComponent(name:string){
    if (!this.checkToastComponents()) return;
    this.toastComponents?.forEach((toastComponent: ToastComponent) => {
      toastComponent.removeComponent(name);
    });
  }

  showMessage(message:string, options?:ToastItemConfig){
    this.toastComponents?.forEach((toastComponent: ToastComponent) => {
      let coords = options?.coords || [ToastX.END, ToastY.BOTTOM];
      if(toastComponent.coordinate[0] === coords[0] && toastComponent.coordinate[1] === coords[1]){
        toastComponent.addMessage(message, options??{});
      }
    });
  }
}
