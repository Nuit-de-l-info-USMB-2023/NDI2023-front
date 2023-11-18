import {Component, ComponentRef, HostBinding, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertComponent} from "../../../alert/components/alert/alert.component";
import {ToastItemConfig} from "../../models/toast-config";

export const x = ['toast-start', 'toast-center', 'toast-end'];
export const y = ['toast-top', 'toast-middle', 'toast-bottom'];


@Component({
  selector: 'app-toast[coordinate]',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: {
    class: 'toast',
  }
})
export class ToastComponent implements OnInit{
  @Input() coordinate!: [number,number];
  @HostBinding('class') hostClass!: string;
  @ViewChild('toastContainer', { read: ViewContainerRef })
  toastContainer!: ViewContainerRef;
  components!: AlertComponent[];

  ngOnInit() {
    this.hostClass = `toast ${x[this.coordinate[0]]} ${y[this.coordinate[1]]}`;
    this.components = [];
  }

  addComponent(name:string, component:any, toastConfig:any){
    let componentRef = this.toastContainer.createComponent(AlertComponent);
    componentRef.instance.name = name;
    componentRef.instance.content = component;
    this.setConfigs(componentRef, toastConfig);
    componentRef.changeDetectorRef.detectChanges();
    this.components.push(componentRef.instance);
  }

  removeComponent(name:string){
    let componentRef = this.components.find((component: AlertComponent) => component.name === name);
    if(componentRef){
      componentRef.alertContainer.clear();
      componentRef.host.nativeElement.remove();
    }
  }

  addMessage(message: string, options: ToastItemConfig) {
    let componentRef = this.toastContainer.createComponent(AlertComponent);
    componentRef.instance.content = message;
    this.setConfigs(componentRef, options);
    componentRef.changeDetectorRef.detectChanges();
  }

  setConfigs(compRef: ComponentRef<any>, options: ToastItemConfig) {
    compRef.instance.alertType = options?.alertType?? null;
    compRef.instance.duration = options?.duration?? null;
  }
}
