import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Goods } from '../goods';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  itemsInCart: Goods[] = [];
  subtotal = 0;
  total = 0;
  importTax = 0.05;
  salesTax = 0.10;
  totalTax =  0;
  taxAmt = 0;
  cartTotal = 0;
  grandTaxes = 0;
  infoText = "Your cart is empty. Let's fill it!";
  apiUrl = "";
  showOrder: boolean = false;
  clearOrder: Subscription;
  constructor(private cartService: CartService, private router: Router) { }
  
  ngOnInit() {
    this.getItemsInCart();
    this.calculateTotal();

  }
  ngOnDestroy() {
    if (this.clearOrder) {
      this.clearOrder.unsubscribe();

    }
  }
  onRemoveItemFromCart(index: number) {
    this.cartService.removeItemFromCart(index);
    this.getItemsInCart();
    this.calculateTotal();

  }

  getItemsInCart() {
    this.itemsInCart = this.cartService.getItemsInCart();
  }

  onPurchase() {
    this.showOrder = false;
    this.clearOrder = this.cartService.purchase(this.itemsInCart).subscribe(
      (res: any) => {

        this.showOrder = true;
        

        setTimeout(() => {
         this.cartService.emptyCart();
         this.itemsInCart = [];
          this.router.navigate(["/goods"]);
        }, 15000);
      }
    );
  }




  calculateTotal() {
    this.total = 0;
    this.cartTotal = 0;
    this.grandTaxes = 0;
    
    for (let item of this.itemsInCart) {
  
      
      item.subTotal = item.price * item.quantity;
     


      if ((item.category == 'music' || item.category == 'luxury' || item.category == 'clothing') &&
        item.importType == 'imported') {
        item.totalTax = this.importTax + this.salesTax;
        item.totalTax = item.totalTax * item.subTotal;
        item.totalTax =   Math.ceil(item.totalTax*(20-0.05))/20;
        item.total = item.totalTax + item.subTotal;
        

      } else if (item.category == 'music' || item.category == 'luxury' || item.category == 'clothing') {
        item.totalTax = this.salesTax;
        item.totalTax = item.totalTax * item.subTotal;
        item.totalTax =   Math.ceil(item.totalTax*(20-0.05))/20;
        item.total = item.totalTax + item.subTotal;

      } else if (item.importType == 'imported') {
        item.totalTax = this.importTax;
        item.totalTax = item.totalTax * item.subTotal;
        item.totalTax =   Math.ceil(item.totalTax*(20-0.05))/20;
        item.total = item.totalTax + item.subTotal;

      } else {
        item.totalTax = 0;
        item.total = ((item.totalTax * item.subTotal) + item.subTotal);

      }
     

      this.grandTaxes += item.totalTax;
      this.cartTotal +=item.subTotal;
      this.total += item.total;
    }
  
  }



  onDecreaseQty(item: Goods) {
    if (item.quantity > 0) {
      item.quantity--;
      this.calculateTotal();
    }
  }

  onIncreaseQty(item: Goods) {
    if (item.quantity < item.available) {
      item.quantity++;
      this.calculateTotal();
    }
  }
}
