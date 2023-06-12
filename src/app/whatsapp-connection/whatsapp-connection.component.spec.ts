import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappConnectionComponent } from './whatsapp-connection';

describe('WhatsappConnectionComponent', () => {
  let component: WhatsappConnectionComponent;
  let fixture: ComponentFixture<WhatsappConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatsappConnectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WhatsappConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
