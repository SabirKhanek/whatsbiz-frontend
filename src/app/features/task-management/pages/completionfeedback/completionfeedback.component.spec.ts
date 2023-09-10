import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionfeedbackComponent } from './completionfeedback.component';

describe('CompletionfeedbackComponent', () => {
  let component: CompletionfeedbackComponent;
  let fixture: ComponentFixture<CompletionfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletionfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
