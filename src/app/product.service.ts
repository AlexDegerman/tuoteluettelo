import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get("./assets/phones/phones.json");
  }
  getProduct(id: any) {
    return this.http.get('./assets/phones/' + id + '.json')
  }
}
