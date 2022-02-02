import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductsserviceService} from '../../service/productsservice.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm : FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router:Router,private ngZone: NgZone,private productservice:ProductsserviceService) {

    this.productForm = this.formBuilder.group({
      productname:[''],
      description:[''],
      brand:[''],
      price:[''],
      image:[''],
      rating:[''],
      category:['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.productservice.AddProduct(this.productForm.value)
    .subscribe(()=>{
      console.log("data uupload succesfully")
      this.ngZone.run(()=>this.router.navigateByUrl('/product-list'))
    },(err):any=>{
      console.log("error")
    })
  }

}
