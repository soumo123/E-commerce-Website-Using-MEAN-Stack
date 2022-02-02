import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShownByidComponent } from './product-shown-byid.component';

describe('ProductShownByidComponent', () => {
  let component: ProductShownByidComponent;
  let fixture: ComponentFixture<ProductShownByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShownByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShownByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
