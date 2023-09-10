import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceDashboardComponent } from './clearance-dashboard.component';

describe('ClearanceDashboardComponent', () => {
  let component: ClearanceDashboardComponent;
  let fixture: ComponentFixture<ClearanceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
