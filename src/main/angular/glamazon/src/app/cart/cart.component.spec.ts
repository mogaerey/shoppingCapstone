import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartComponent } from './cart.component';
import { Goods } from '../goods';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

it('should calculate the total', () => {
  const cartComponent = new CartComponent(null, null);
  const hasSalesTax = new Goods("Watch",  "domestic", 499.99, "luxury", "https://encrypted-tbn1.gstatic.com",850.00, 0.10, 935.00, 8);
  const taxFree = new Goods("avocado",  "domestic", 0.99, "luxury", "https://encrypted-tbn1.gstatic.com",0.99, 0.0, 0.99, 8);
  expect(cartComponent.calculateTotal()).toEqual();
  expect(cartComponent.calculateTotal()).toEqual();
});