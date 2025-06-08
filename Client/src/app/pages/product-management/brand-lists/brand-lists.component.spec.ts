import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandListsComponent } from './brand-lists.component';

describe('BrandListsComponent', () => {
  let component: BrandListsComponent;
  let fixture: ComponentFixture<BrandListsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BrandListsComponent,]
    });
    fixture = TestBed.createComponent(BrandListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
