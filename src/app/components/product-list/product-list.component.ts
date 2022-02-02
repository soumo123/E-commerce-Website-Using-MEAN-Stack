import { Component, OnInit } from '@angular/core';
import {ProductsserviceService} from '../../service/productsservice.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  allproducts:any = []
  public filterCategory : any
  searchKey:string ="";
  router: any;
  id: any;
  constructor(private produtsservice : ProductsserviceService) { }

  ngOnInit(): void {
    this.produtsservice.getAllProducts().subscribe(res=>{
      console.log(res)
      this.allproducts = res
      this.filterCategory = res;
      this.allproducts.forEach((a:any) => {
        if(a.category ==="Shirts" || a.category ==="Mens"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.allproducts)
    });

    this.produtsservice.search.subscribe((val:any)=>{
      this.searchKey = val
    })
  }


  addtocart(item: any){
    this.produtsservice.addtoCart(item);
  }


  delete(id:any,i:any){
    console.log(id)
    if(window.confirm('Are you bsure want to delete the products ??'))
    {
      this.produtsservice.deleteproduct(id).subscribe((res)=>{
        this.allproducts.splice(i,1)
      })
    }
  }
  filter(category:string){
    this.filterCategory = this.allproducts
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  

}
