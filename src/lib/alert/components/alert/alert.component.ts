import {
  AfterViewInit,
  Component, ElementRef,
  HostBinding,
  Input, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

export enum AlertType {
  SUCCESS = 'alert-success',
  INFO = 'alert-info',
  WARNING = 'alert-warning',
  ERROR = 'alert-error'
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit{
  @Input() alertType!: AlertType;
  @HostBinding('class') hostClass!: string;
  @ViewChild('alertContainer', { read: ViewContainerRef })
  alertContainer!: ViewContainerRef;
  component?: any;
  duration?: number;

  constructor(private host: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.hostClass = `alert ${this.alertType}`;
    if(this.duration){
      setTimeout(() => {
        this.alertContainer.clear();
        this.host.nativeElement.remove();
      }, this.duration);
    }
  }

  ngAfterViewInit() {
    this.loadComponent(this.component);
  }

  loadComponent(component: any) {
    const componentRef = this.alertContainer.createComponent(component);
  }
}
