import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitListsComponent } from './unit-lists.component';
describe('UnitListsComponent', () => {
  let component: UnitListsComponent;
  let fixture: ComponentFixture<UnitListsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UnitListsComponent]
    });
    fixture = TestBed.createComponent(UnitListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
