import { Component, ViewEncapsulation } from '@angular/core';
import { OrderApiService } from 'src/app/services/network-calls/order-api.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent{

total:number | undefined;
cartItems:any;
closeResult = '';
  constructor( private OrderApiSerice : OrderApiService
    ) { 
      OrderApiSerice.getCart().then(data => {
      data.subscribe((cart: any) => {
        console.log(cart);
        this.cartItems = cart.items;
        this.total = cart.total;
      });
    });

    this.ngOnInit(); {
      this.OrderApiSerice.getCart().then(data =>{
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
this.OrderApiSerice.addToCart(item)
}


removeFromCart(item:any){
this.OrderApiSerice.removeFromCart(item);
}
}
