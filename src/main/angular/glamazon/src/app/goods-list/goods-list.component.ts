import { Component, OnInit, OnDestroy } from '@angular/core';
import { Goods } from '../goods';
import { GoodsService } from '../goods.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit, OnDestroy {
  allGoods: Goods[] = [];
  searchTerm = "";
  getSub: Subscription;

  constructor(private goodsService: GoodsService) { }
  
// sets up  process of getting data changes then unsubscribing once the program is exited
  ngOnInit() {
    this.getGoods();
  }

  ngOnDestroy() {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }
  }

  getGoods() {
    this.getSub = this.goodsService.getGoods().subscribe(
      (res: any) => {
        this.allGoods = res;
      },
      err => {
        console.log(err);
      }
    )
  }
}
