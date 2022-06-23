import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  products: any[] = [];
  product: any;
  check = faCheck;
  unCheck = faXmark;
  src : any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productId = this.route.snapshot.params["id"];
    this.route.params.subscribe((params: any) => {
      this.productId = params['id'];
    });
    this.productService.getProduct(this.productId).subscribe(((data: any) => {
      this.product = data
    }));
  }
  changeImg(event: any) {
    this.src = event.target.getAttribute('src');
    document.getElementById('bigimg')?.setAttribute('src', this.src);
  }
}
