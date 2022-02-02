import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductsserviceService} from '../../service/productsservice.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    getId:any
    updateForm!: any
  constructor(private formBuilder: FormBuilder,private router:Router,private ngZone: NgZone,private activatedRoute: ActivatedRoute,private productsservice : ProductsserviceService) {

    this.getId  = this.activatedRoute.snapshot.paramMap.get('id')
    this.productsservice.getproductbyId(this.getId).subscribe(res=>{
      this.updateForm.setValue({
        productname:res[''],
        description:res[''],
        brand:res[''],
        price:res[''],
        image:res[''],
        rating:res[''],
        category:res['']
      })
    })

    this.updateForm = this.formBuilder.group({
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

  onUpdate(){
    this.productsservice.updateproduct(this.getId,this.updateForm.value).subscribe(res=>{
      console.log("Data updated succesfully")
      this.ngZone.run(()=>this.router.navigateByUrl('/product-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
