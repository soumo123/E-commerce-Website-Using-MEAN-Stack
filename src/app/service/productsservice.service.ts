import { HttpClient, HttpHeaders,HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,throwError } from 'rxjs';
import { Product } from './product';
import {catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  Api: string="http://localhost:8000/api"
  httpheaders = new HttpHeaders().set('Content-Type', 'application/json')
  
  constructor(private httpclient: HttpClient) { }

  //add-product//
  AddProduct(data:Product):Observable<any>{
    let Api_Url = `${this.Api}/add-product`;
    return this.httpclient.post(Api_Url,data).pipe(catchError(this.handleError));
  }
//get all product products

getAllProducts(){
  return this.httpclient.get(`${this.Api}`);
}
  
//get specific product

getproductbyId(id:any):Observable<any>{
  let Api_Url = `${this.Api}/get-product/${id}`;
  return this.httpclient.get(Api_Url,{headers:this.httpheaders}).pipe(map((res:any)=>{
    
    return res || {}
  }),
  catchError(this.handleError)
  )
}

//update products

updateproduct(id:any,data:any):Observable<any>{
  let Api_Url = `${this.Api}/update-product/${id}`;
  return this.httpclient.put(Api_Url,data,{headers:this.httpheaders}).pipe(catchError(this.handleError))
}


//delete product
deleteproduct(id:any):Observable<any>{
  let Api_Url = `${this.Api}/delete-product/${id}`;
  return this.httpclient.delete(Api_Url,{headers:this.httpheaders}).pipe(catchError(this.handleError))
}


//handling the error
handleError(error:HttpErrorResponse){
  let errorMessage = ''

  if(error.error instanceof ErrorEvent){
    errorMessage = error.error.message
  }else{
    errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`
  }
  console.log(errorMessage)
  return throwError(errorMessage)
}

//add to cart service////////////////////////////////

getProducts(){
  return this.productList.asObservable();
}

setProduct(product : any){
  this.cartItemList.push(...product);
  this.productList.next(product);
}
addtoCart(product : any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  localStorage.setItem('product',product._id)
  console.log(this.cartItemList)
}
getTotalPrice() : number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
    console.log(typeof a.total)
  })
  return grandTotal;
}



removeCartItem(product: any){
  this.cartItemList.splice(product,1)
  this.productList.next(this.cartItemList);
}





removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}
}
