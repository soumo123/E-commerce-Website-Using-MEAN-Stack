import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http:HttpClient) { }
  
  signup(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/auth/signup',data)
  }
  signin(data:any):Observable<any>{
    return this.http.post('http://localhost:8000/auth/login',data)

  }

  getProfile():Observable<any>{
    let headers = {
      "Authorization":"Bearer" + localStorage.getItem('token')
    }
    let userId = localStorage.getItem('userId')
    return this.http.get('http://localhost:8000/auth/profile'+`/${userId}`,{headers:headers})
  }
}
 