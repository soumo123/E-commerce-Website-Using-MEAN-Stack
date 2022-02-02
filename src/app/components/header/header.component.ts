import { Component, OnInit } from '@angular/core';
import { ProductsserviceService } from 'src/app/service/productsservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private productservice: ProductsserviceService) { }


  ngOnInit(): void {
    this.productservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.productservice.search.next(this.searchTerm);
  }
}