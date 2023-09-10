import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCommitteMeetingComponent } from './process-committe-meeting.component';

describe('ProcessCommitteMeetingComponent', () => {
  let component: ProcessCommitteMeetingComponent;
  let fixture: ComponentFixture<ProcessCommitteMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCommitteMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCommitteMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
