import { Component, OnInit, OnDestroy } from '@angular/core';
import { Goods } from '../goods';
import { GoodsService } from '../goods.service';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  allGoods: Goods[] = [];
  addGoodsForm = this.fb.group({
    name: [''],
    importType: [''],
    price: [],
    category: [''],
    imageUrl: [''],
    quantity: []
  });
  goodsIdBeingEdited: number;
  getSub: Subscription;
  deleteSub: Subscription;
  postSub: Subscription;
  putSub: Subscription;

  constructor(private goodsService: GoodsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getGoods();
  }

  ngOnDestroy() {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }

    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }

    if (this.postSub) {
      this.postSub.unsubscribe();
    }

    if (this.putSub) {
      this.putSub.unsubscribe();
    }
  }

  getGoods() {
    this.getSub = this.goodsService.getGoods().subscribe(
      (res: any) => {
        this.allGoods = res;
      }
    );
  }

  onDeleteGoodsItem(goods: Goods) {
    this.deleteSub = this.goodsService.deleteGoodsItem(goods.id).subscribe(
      (res: any) => {
        this.getGoods();
      }
    )
  }

  onSubmitForm() {
    const name = this.addGoodsForm.value.name;
    const importType = this.addGoodsForm.value.imageType;
    const price = this.addGoodsForm.value.price;
    const category = this.addGoodsForm.value.category;
    const imageUrl = this.addGoodsForm.value.imageUrl;
    const tax = this.addGoodsForm.value.tax;
    const quantity = this.addGoodsForm.value.quantity;
    const newGoods = new Goods(name, importType, price, category,  imageUrl, tax, quantity, 0.0, 0.0, 0.0);

    // Adding new item
    if (this.goodsIdBeingEdited == undefined) {
      this.postSub = this.goodsService.addGoodsItem(newGoods).subscribe(
        (res: any) => {
          this.getGoods();
          this.addGoodsForm.reset();
        }
      )
    } else {
      newGoods.id = this.goodsIdBeingEdited;
      this.putSub = this.goodsService.updateGoodsItem(this.goodsIdBeingEdited, newGoods).subscribe(
        (res: any) => {
          this.onCancelEditGoodsItem();
          this.getGoods();
        }
      )
    }
  }

  onStartEditGoodsItem(goods: Goods) {
    this.goodsIdBeingEdited = goods.id;
    this.addGoodsForm.patchValue(goods);
  }

  onCancelEditGoodsItem() {
    this.goodsIdBeingEdited = undefined;
    this.addGoodsForm.reset();
  }
}
