import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCardComponent } from './goods-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoodsListComponent } from '../goods-list.component';
import { Goods } from 'src/app/goods';
import { SearchPipe } from 'src/app/search.pipe';

describe('GoodsCardComponent', () => {
  let component: GoodsCardComponent;
  let fixture: ComponentFixture<GoodsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      declarations: [ GoodsCardComponent, GoodsListComponent, SearchPipe  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCardComponent);
    
    component = fixture.componentInstance;

    let expectedItem = new Goods("Watch",  "domestic", 499.99, "luxury", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsfOfERLPE3hdKhWrLsRrmek_OEINYN_33ytaax3LhNYvyrvJ5vWdqp3uc-flxb3tYKY-onnPxm9Q&usqp=CAc",850.00, 0.10, 935.00, 8);
    component.goods = expectedItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
