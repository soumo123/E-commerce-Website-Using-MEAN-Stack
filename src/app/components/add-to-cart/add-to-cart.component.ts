import { Component, OnInit } from '@angular/core';
import { ProductsserviceService } from 'src/app/service/productsservice.service';
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  constructor(private productservice : ProductsserviceService) { }

  ngOnInit(): void {
    this.productservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      localStorage.setItem('products',this.products)
      this.grandTotal = this.productservice.getTotalPrice();
    })
  }


  removeItem(i: any){
    this.productservice.removeCartItem(i);
  }
  emptycart(){
    this.productservice.removeAllCart();
  }

}
