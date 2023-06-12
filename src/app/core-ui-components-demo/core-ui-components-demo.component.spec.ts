import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreUiComponentsDemoComponent } from './core-ui-components-demo.component';

describe('CoreUiComponentsDemoComponent', () => {
  let component: CoreUiComponentsDemoComponent;
  let fixture: ComponentFixture<CoreUiComponentsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreUiComponentsDemoComponent]
    });
    fixture = TestBed.createComponent(CoreUiComponentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
