import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/network-calls/product.api.service';
import { OrderApiService } from 'src/app/services/network-calls/order-api.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

 
  constructor(private param:ActivatedRoute, private route: Router, private service:ProductApiService, private  OrderApiService :OrderApiService) { }
  getproductsId:any;
  product:any;
  // orderQty = 1;

  ngOnInit(): void {
    this.getproductsId = this.param.snapshot.paramMap.get('id');
    console.log(this.getproductsId,'getproducts');
    if(this.getproductsId)
  {
    this.product = this.service.ProductData.filter((value:{id: any;})=>{
     return value.id == this.getproductsId;
      
    })[0];
    console.log(this.product);
  }
  }
addToCart(item: any){
  this.OrderApiService.addToCart(item)
}





}

