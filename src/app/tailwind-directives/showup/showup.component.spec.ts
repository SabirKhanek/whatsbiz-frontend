import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowupComponent } from './showup.component';

describe('ShowupComponent', () => {
  let component: ShowupComponent;
  let fixture: ComponentFixture<ShowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
