import { Component } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-base',
  template:''
})
export class BaseComponent {
  protected destroy$ = new Subject<void>();
  constructor() {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
