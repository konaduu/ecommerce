import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
 

  ProductData = [
    {
        id:1,
        ProductName:"Pet Nail Clipper",
        ProductSize:"3.5 mm thick",
        ProductPrice:10,
        Productimg:"/assets/img/nailclippers.jpg" 
    },
    {
      id:2,
      ProductName:"Nylabone Chew Toy",
      ProductSize:"Small",
      ProductPrice:10,
      ProductFlavour:"Chicken",
      Productimg:"/assets/img/chew toy-2.jpg"
  },
    
  {
    id:3,
    ProductName:"Nylabone Chew Toy",
    ProductSize:"3.5mm thick",
    ProductPrice:10,
    ProductFlavour:"Beef",
    Productimg:"/assets/img/chew toy.jpg"
  },
  {
    id:4,
    ProductName:"Killer T-shirt",
    ProductSize:"Small",
    ProductPrice:10,
    ProductFlavour:"Black",
    Productimg:"/assets/img/killer.png"
    
  },
  {
    id:5,
    ProductName:"Headrest Pet Seat belt ",
    ProductSize:"Small",
    ProductPrice:10,
    Productimg:"/assets/img/headrest.jpg" 
  },
  {
    id:6,
    ProductName:"VIP T-Shirt",
    ProductSize:"Small",
    ProductPrice:10,
    Productimg:"/assets/img/vip.png" 
  },
  {
    id:7,
    ProductName:"Red Woof T-shirt",
    ProductSize:"Small",
    ProductPrice:10,
    Productimg:"/assets/img/red_woof.png" 
  },
  {
    id:8,
    ProductName:"Adjustable Bandana Collar ",
    ProductSize:"Small",
    ProductPrice:10,
    Productimg:"/assets/img/bandana.jpg" 
  },
  {
    id:9,
    ProductName:"Nylabone chew toy",
    ProductSize:"Small",
    ProductPrice:10,
    Productimg:"/assets/img/chew toy-2.jpg"
  },
  {
    id:10,
    ProductName:"Nylabone chew toy",
    ProductSize:"Small",
    ProductPrice:10,
    Productimg:"/assets/img/chew toy-2.jpg" 
  },
    
    
  ];
  constructor(
    private http: HttpClient
  ) { }

  // getProducts(){
  //   return this.http.get('https://dummyjson.com/products');
  // }

// Produxt details
 


}
  
