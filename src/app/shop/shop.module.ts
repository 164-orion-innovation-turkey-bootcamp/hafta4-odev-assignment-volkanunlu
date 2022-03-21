import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
    imports : [ModelModule,BrowserModule,FormsModule,RouterModule],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports:[ShopComponent,CartDetailComponent,CheckoutComponent]

})

export class ShopModule{}