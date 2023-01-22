import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { AddToCartComponent } from './components/market-place/add-to-cart/add-to-cart.component';
import { ProductDetailComponent } from './components/market-place/product-detail/product-detail.component';
import { ProductListComponent } from './components/market-place/product-list/product-list.component';
import { CartComponent } from './components/order/cart/cart.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { OrderHistoryComponent } from './components/order/order-history/order-history.component';
import { PaymentComponent } from './components/transactions/payment/payment.component';
import { PaymentHistoryComponent } from './components/transactions/payment-history/payment-history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OrderApiService } from './services/network-calls/order-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    AddToCartComponent,
    ProductDetailComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    PaymentComponent,
    PaymentHistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OrderApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
