import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { SearchPipe } from './search.pipe';
import { GoodsCardComponent } from './goods-List/goods-card/goods-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    PageNotFoundComponent,
    GoodsListComponent,
    SearchPipe,
    GoodsCardComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
