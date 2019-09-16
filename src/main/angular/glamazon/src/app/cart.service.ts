import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goods } from './goods';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart: Goods[] = [];
  apiUrl = 'http://localhost:8080'; // location of database and data

  constructor(private http: HttpClient) { }

  addToCart(goods: Goods, qty: number) {
    let itemAlreadyInCart = false;
    this.itemsInCart = this.itemsInCart.map(i => {
      if (i.id == goods.id) {
        i.quantity = qty;
        

        
        itemAlreadyInCart = true;
      }
      return i;
    });

    if (!itemAlreadyInCart) {
      const newGoods = new Goods( goods.name, goods.importType, goods.price, goods.imageUrl, goods.category, goods.subTotal, goods.totalTax, goods.total, qty, goods.quantity);
      newGoods.id = goods.id;
      this.itemsInCart.push(newGoods);
    }
  }

  getItemsInCart(): Goods[] {
    return this.itemsInCart;
  }

  removeItemFromCart(index: number) {
    this.itemsInCart.splice(index, 1);

  }

  emptyCart() {
    this.itemsInCart = [];
  }

  purchase(goodsItems: Goods[]): Observable<null> {
    const url = `${this.apiUrl}/purchase`;
    return this.http.post<null>(url, goodsItems);
  }
}
