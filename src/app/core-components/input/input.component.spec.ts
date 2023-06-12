import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: FloatingInputComponent;
  let fixture: ComponentFixture<FloatingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingInputComponent]
    });
    fixture = TestBed.createComponent(FloatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
