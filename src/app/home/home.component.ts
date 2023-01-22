import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/network-calls/product.api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any = [];
  constructor(
      private productApi: ProductApiService
  ) { }

  ngOnInit(): void {
      this.products = this.productApi.ProductData;
  }

}
