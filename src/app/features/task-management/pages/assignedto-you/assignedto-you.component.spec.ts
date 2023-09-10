import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedtoYouComponent } from './assignedto-you.component';

describe('AssignedtoYouComponent', () => {
  let component: AssignedtoYouComponent;
  let fixture: ComponentFixture<AssignedtoYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedtoYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedtoYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
