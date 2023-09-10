import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesMeetingComponent } from './changes-meeting.component';

describe('ChangesMeetingComponent', () => {
  let component: ChangesMeetingComponent;
  let fixture: ComponentFixture<ChangesMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
