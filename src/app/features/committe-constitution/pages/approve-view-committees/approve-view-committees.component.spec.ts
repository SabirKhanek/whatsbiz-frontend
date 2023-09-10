import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveViewCommitteesComponent } from './approve-view-committees.component';

describe('ApproveViewCommitteesComponent', () => {
  let component: ApproveViewCommitteesComponent;
  let fixture: ComponentFixture<ApproveViewCommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveViewCommitteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveViewCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
