import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMinutesTaskComponent } from './change-minutes-task.component';

describe('ChangeMinutesTaskComponent', () => {
  let component: ChangeMinutesTaskComponent;
  let fixture: ComponentFixture<ChangeMinutesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMinutesTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeMinutesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
