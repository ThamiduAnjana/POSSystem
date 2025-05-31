import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePosComponent } from './advance-pos.component';

describe('AdvancePosComponent', () => {
  let component: AdvancePosComponent;
  let fixture: ComponentFixture<AdvancePosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancePosComponent]
    });
    fixture = TestBed.createComponent(AdvancePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
