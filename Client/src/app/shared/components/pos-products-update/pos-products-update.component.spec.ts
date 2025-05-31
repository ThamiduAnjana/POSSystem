import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosProductsUpdateComponent } from './pos-products-update.component';

describe('PosProductsUpdateComponent', () => {
  let component: PosProductsUpdateComponent;
  let fixture: ComponentFixture<PosProductsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosProductsUpdateComponent]
    });
    fixture = TestBed.createComponent(PosProductsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
