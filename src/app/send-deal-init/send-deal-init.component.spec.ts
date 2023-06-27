import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDealInitComponent } from './send-deal-init.component';

describe('SendDealInitComponent', () => {
  let component: SendDealInitComponent;
  let fixture: ComponentFixture<SendDealInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendDealInitComponent]
    });
    fixture = TestBed.createComponent(SendDealInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
