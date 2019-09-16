import { Component, OnInit, Input } from '@angular/core';
import { Goods } from 'src/app/goods';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss']
})
export class GoodsCardComponent implements OnInit {
  @Input() goods: Goods;
  buttonText = "Add to Cart";
  qtyToPurchase = 1;

  constructor(private cartService: CartService) { }

  ngOnInit() { }
  
// creates button to add item to cart then toggles from ADDED to ADD TO CART
  onAddToCart(goods: Goods) {
    if (this.qtyToPurchase > 0 && this.qtyToPurchase <= goods.quantity) {
     
      this.cartService.addToCart(goods, this.qtyToPurchase);
      this.buttonText = "Added";
      console.log(goods.name);
      setTimeout(() => {
        this.buttonText = "Add to Cart";
      }, 1500);
    }
  }
}

