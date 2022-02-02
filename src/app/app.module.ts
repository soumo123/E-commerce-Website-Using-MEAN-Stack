import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import {AccountserviceService} from './account/accountservice.service';
import {AccountModule} from './account/account.module';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { ProductShownByidComponent } from './components/product-shown-byid/product-shown-byid.component';



@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    HeaderComponent,
    AddToCartComponent,
    FilterPipe,
    ProductShownByidComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   AccountModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
