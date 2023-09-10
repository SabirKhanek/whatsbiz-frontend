import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessNewCommitteeFormationComponent } from './process-new-committee-formation.component';

describe('ProcessNewCommitteeFormationComponent', () => {
  let component: ProcessNewCommitteeFormationComponent;
  let fixture: ComponentFixture<ProcessNewCommitteeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessNewCommitteeFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessNewCommitteeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
