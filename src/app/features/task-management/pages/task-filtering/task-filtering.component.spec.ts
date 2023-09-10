import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFilteringComponent } from './task-filtering.component';

describe('TaskFilteringComponent', () => {
  let component: TaskFilteringComponent;
  let fixture: ComponentFixture<TaskFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFilteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
