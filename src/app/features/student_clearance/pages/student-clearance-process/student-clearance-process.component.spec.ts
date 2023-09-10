import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClearanceProcessComponent } from './student-clearance-process.component';

describe('StudentClearanceProcessComponent', () => {
  let component: StudentClearanceProcessComponent;
  let fixture: ComponentFixture<StudentClearanceProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentClearanceProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentClearanceProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
