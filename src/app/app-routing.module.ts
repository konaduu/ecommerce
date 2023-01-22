import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './components/market-place/add-to-cart/add-to-cart.component';
import { ProductDetailComponent } from './components/market-place/product-detail/product-detail.component';
import { ProductListComponent } from './components/market-place/product-list/product-list.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path: 'products', component:ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path:'cart', component:AddToCartComponent},
  {path:'home',component:HomeComponent},
  {path:'add-to-cart',component:AddToCartComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
