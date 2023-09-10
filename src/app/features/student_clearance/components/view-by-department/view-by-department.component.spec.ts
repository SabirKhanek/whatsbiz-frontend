import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByDepartmentComponent } from './view-by-department.component';

describe('ViewByDepartmentComponent', () => {
  let component: ViewByDepartmentComponent;
  let fixture: ComponentFixture<ViewByDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
