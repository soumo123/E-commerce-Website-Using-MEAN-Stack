import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {ProductListComponent} from './components/product-list/product-list.component'
import { ProductShownByidComponent } from './components/product-shown-byid/product-shown-byid.component';
const routes: Routes = [
  {path:'',redirectTo:'product-list',pathMatch:'full'},
  {path:'product-list',component:ProductListComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'edit-product/:id',component:ProductDetailsComponent},
  {path:'get-product/:id',component:ProductShownByidComponent},
  {path:'cart',component:AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
