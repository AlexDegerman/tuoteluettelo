import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  searchText = "";
  products: any[] = [];
  order= "";
  ngOnInit(): void {
    this.getProducts();
  }

  sortByNewest() {
    this.products.sort((a: any, b: any) => b.age - a.age);
  }
  sortByAlphabet() {
    this.products.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }

  sort(event: any){
    console.log(event);
    let option = event.target.value;
    if (option === "newest") {
      this.sortByNewest();
      console.log("new")
    } 
    else if (option === "alphabetical") {
      this.sortByAlphabet();
      console.log("alph")
    }
  }
  getProducts() {
  this.productService.getProducts().subscribe((res: any) => {
    this.products = res;
    this.products.sort((a: any, b: any) => b.age - a.age);
  })
  }
}
