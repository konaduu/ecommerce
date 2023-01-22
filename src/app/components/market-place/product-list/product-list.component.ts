import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/network-calls/product.api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any = [];
  // ProductData=[];
  constructor(
    // private productApi: ProductApiService
    private productApi: ProductApiService

  ) { }
  ngOnInit(): void {
    // this.getProducts();
    this.products = this.productApi.ProductData;
  }


// getProducts(){
//   this.productApi.getProducts().subscribe((response: any) => {
//     this.products =response.product;
//     // console.log(response.products);
//   });
// }
// }
}