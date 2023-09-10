import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMinutesTaskComponent } from './record-minutes-task.component';

describe('RecordMinutesTaskComponent', () => {
  let component: RecordMinutesTaskComponent;
  let fixture: ComponentFixture<RecordMinutesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordMinutesTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordMinutesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
