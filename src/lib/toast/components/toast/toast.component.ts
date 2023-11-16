import {Component, HostBinding, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertComponent} from "../../../alert/components/alert/alert.component";

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

  ngOnInit() {
    this.hostClass = `toast ${x[this.coordinate[0]]} ${y[this.coordinate[1]]}`;
  }

  addToast(component:any, toastConfig:any){
    let componentRef = this.toastContainer.createComponent(AlertComponent);
    componentRef.instance.component = component;
    componentRef.instance.alertType = toastConfig.alertType;
    componentRef.instance.duration = toastConfig.duration;
  }

}
