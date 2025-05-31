import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGridViewComponent } from './create-grid-view.component';

describe('CreateGridViewComponent', () => {
  let component: CreateGridViewComponent;
  let fixture: ComponentFixture<CreateGridViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGridViewComponent]
    });
    fixture = TestBed.createComponent(CreateGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
