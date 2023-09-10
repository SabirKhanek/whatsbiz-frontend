import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommitteComponent } from './view-committe.component';

describe('ViewCommitteComponent', () => {
  let component: ViewCommitteComponent;
  let fixture: ComponentFixture<ViewCommitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommitteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
