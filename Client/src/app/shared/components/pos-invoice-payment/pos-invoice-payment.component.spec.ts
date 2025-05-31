import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosInvoicePaymentComponent } from './pos-invoice-payment.component';

describe('PosInvoicePaymentComponent', () => {
  let component: PosInvoicePaymentComponent;
  let fixture: ComponentFixture<PosInvoicePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosInvoicePaymentComponent]
    });
    fixture = TestBed.createComponent(PosInvoicePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
