import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMinutesTaskComponent } from './approve-minutes-task.component';

describe('ApproveMinutesTaskComponent', () => {
  let component: ApproveMinutesTaskComponent;
  let fixture: ComponentFixture<ApproveMinutesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveMinutesTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveMinutesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
