import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePosComponent } from './simple-pos.component';

describe('SimplePosComponent', () => {
  let component: SimplePosComponent;
  let fixture: ComponentFixture<SimplePosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplePosComponent]
    });
    fixture = TestBed.createComponent(SimplePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
