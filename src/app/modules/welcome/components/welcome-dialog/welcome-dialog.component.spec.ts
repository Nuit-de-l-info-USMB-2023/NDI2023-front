import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDialogComponent } from './welcome-dialog.component';

describe('WelcomeHeroComponent', () => {
  let component: WelcomeDialogComponent;
  let fixture: ComponentFixture<WelcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
