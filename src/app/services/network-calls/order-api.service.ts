import { Injectable } from '@angular/core';
import { ProductApiService } from './product.api.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  private cartItems:any[] = [];
  private total: number = 0;
  private cartSubject = new BehaviorSubject({items: this.cartItems, total: this.total});

  constructor() { }

  // methid for adding an item to the cart 
  addToCart(item: any){
    console.log(item)
    item.quantity = 1
    this.cartItems.push(item);
    this.total += item.ProductPrice;
    this.cartSubject.next({items: this.cartItems, total: this.total});
    alert(item.ProductName + "added to cart");

  }

// method for removing an item from the cart 
removeFromCart(item: any){
  const index = this.cartItems.indexOf(item);
  this.cartItems.splice(index, 1);
  this.total -= item.ProductPrice;
  this.cartSubject.next({items: this.cartItems, total: this.total});
}



// method for getting the current cart items an d totoal 
async getCart(){
  return await this.cartSubject.asObservable();
}

}
