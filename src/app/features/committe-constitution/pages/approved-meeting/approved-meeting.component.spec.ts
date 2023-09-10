import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedMeetingComponent } from './approved-meeting.component';

describe('ApprovedMeetingComponent', () => {
  let component: ApprovedMeetingComponent;
  let fixture: ComponentFixture<ApprovedMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
