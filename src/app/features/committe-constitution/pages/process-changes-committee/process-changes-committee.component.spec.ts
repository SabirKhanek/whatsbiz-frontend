import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessChangesCommitteeComponent } from './process-changes-committee.component';

describe('ProcessChangesCommitteeComponent', () => {
  let component: ProcessChangesCommitteeComponent;
  let fixture: ComponentFixture<ProcessChangesCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessChangesCommitteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessChangesCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
