import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfaPopupComponent } from './tfa-popup.component';

describe('TfaPopupComponent', () => {
  let component: TfaPopupComponent;
  let fixture: ComponentFixture<TfaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfaPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
