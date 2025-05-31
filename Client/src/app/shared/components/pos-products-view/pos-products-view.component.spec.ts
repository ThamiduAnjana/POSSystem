import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosProductsViewComponent } from './pos-products-view.component';

describe('PosProductsViewComponent', () => {
  let component: PosProductsViewComponent;
  let fixture: ComponentFixture<PosProductsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosProductsViewComponent]
    });
    fixture = TestBed.createComponent(PosProductsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
