import { Component, OnInit } from '@angular/core';
import { OrderApiService } from 'src/app/services/network-calls/order-api.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
total:number | undefined;
cartItems:any;
  constructor( private OrderApiService : OrderApiService
    ) { 
      this.OrderApiService.getCart().then(data => {
        data.subscribe((cart: {items: any; total:number |undefined; }) => {
          this.cartItems = cart.items;
          this.total = cart.total;
        });
      });

      this.ngOnInit(); {
        this.OrderApiService.getCart().then(data =>{
          data.subscribe((cart: {items: any; total: number | undefined;}) => {
            this.cartItems = cart.items;
            this.total = cart.total;
          });
        });
      }
    }

  ngOnInit(): void {

  }
 addToCart(item: any){
  this.OrderApiService.addToCart(item)
 }


 removeFromCart(item:any){
  this.OrderApiService.removeFromCart(item);
 }
}
