import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastInjectorComponent } from './toast-injector.component';

describe('ToastInjectorComponent', () => {
  let component: ToastInjectorComponent;
  let fixture: ComponentFixture<ToastInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastInjectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
