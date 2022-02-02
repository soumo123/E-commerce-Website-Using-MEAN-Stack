import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/service/product';
import { ProductsserviceService } from 'src/app/service/productsservice.service';

@Component({
  selector: 'app-product-shown-byid',
  templateUrl: './product-shown-byid.component.html',
  styleUrls: ['./product-shown-byid.component.css']
})
export class ProductShownByidComponent implements OnInit {

  productId: any;
  updateProduct!:FormGroup
  productList:any = Product

  constructor(
    private activatedRoute: ActivatedRoute,private productsservice : ProductsserviceService
  ) { 

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsservice.getproductbyId(this.productId).subscribe((productdata)=>{
      this.productList = productdata
    })
  }

  ngOnInit(): void {
  }

}
