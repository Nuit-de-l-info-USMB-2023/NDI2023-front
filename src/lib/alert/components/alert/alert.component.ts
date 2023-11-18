import {
  AfterViewInit, ChangeDetectorRef,
  Component, ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {MessageComponent} from "../message/message.component";
import {AlertType, iconsForType} from "../../models/alert-type";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit{
  @Input() alertType?: AlertType;
  @HostBinding('class') hostClass!: string;
  @ViewChild('alertContainer', { read: ViewContainerRef }) alertContainer!: ViewContainerRef;
  name?: string;
  content?: any;
  duration?: number;
  icon?: string;

  constructor(public host: ElementRef<HTMLElement>, private detector: ChangeDetectorRef){
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
    //get type of component
    if(typeof this.content === 'string'){
      this.loadMessage(this.content);
    }else{
      this.loadComponent(this.content);
    }
  }

  loadComponent(component: any) {
    const componentRef = this.alertContainer.createComponent(component);
    componentRef.changeDetectorRef.detectChanges();
  }

  loadMessage(message: string) {
      const componentRef = this.alertContainer.createComponent(MessageComponent);
      componentRef.instance.message = message;
      this.setIcon();
      componentRef.changeDetectorRef.detectChanges();
  }

    setIcon(){
      if (this.alertType){
          iconsForType.forEach((iconType) => {
              if(iconType.type == this.alertType){
                  this.icon = iconType.icon;
                  this.detector.detectChanges();
                  return;
              }
          });
      }
  }
}
