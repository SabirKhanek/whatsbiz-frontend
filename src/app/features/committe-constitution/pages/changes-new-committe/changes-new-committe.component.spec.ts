import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesNewCommitteComponent } from './changes-new-committe.component';

describe('ChangesNewCommitteComponent', () => {
  let component: ChangesNewCommitteComponent;
  let fixture: ComponentFixture<ChangesNewCommitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesNewCommitteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesNewCommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
