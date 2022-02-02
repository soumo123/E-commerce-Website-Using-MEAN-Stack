import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private fb: FormBuilder,private authservice:AccountserviceService,private router:Router) { 

    this.form = this.fb.group({
    'email':['',Validators.required],
    'password':['',Validators.required],

    })
  }
 
  ngOnInit() {

  }
 
login(){
 const data = this.form.value
 this.authservice.signin(data)
 .subscribe(res=>{
   if(res.success){
     localStorage.setItem('token', res.token)
     localStorage.setItem('userId',res.users._id)
     alert(res.message)
     this.router.navigate(["/product-list"]);
   }else{
     alert(res.message)
   }
  //  alert("Login Succesfull")
 },err=>{
   alert("login unsuccesful")
 })
}

}
