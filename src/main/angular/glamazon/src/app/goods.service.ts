import { Injectable } from '@angular/core';
import { Goods } from './goods';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getGoods(): Observable<Goods[]> {
    const url = `${this.apiUrl}/goods`;
    return this.http.get<Goods[]>(url);
  }

  deleteGoodsItem(id: number): Observable<Goods> {
    const url = `${this.apiUrl}/goods/${id}`;
    return this.http.delete<Goods>(url);
  }

  addGoodsItem(goods: Goods): Observable<Goods> {
    const url = `${this.apiUrl}/goods`;
    return this.http.post<Goods>(url, goods);
  }

  updateGoodsItem(id: number, goods: Goods): Observable<Goods> {
    const url = `${this.apiUrl}/goods/${id}`;
    return this.http.put<Goods>(url, goods);
  }
}

