import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import {AccountserviceService} from '../accountservice.service'
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  form:FormGroup;
  message:string = 'Signup succesfull'
  className ='d-none'
  isprocessing=false

  constructor(private fb: FormBuilder,private auth:AccountserviceService,private router:Router) { 

    this.form = this.fb.group({
    'name':['',Validators.required],
    'email':['',Validators.required],
    'password':['',Validators.required],
    'confirm':['',Validators.required]
    })
  }
 
  ngOnInit() {
  }
 
signup(){
  this.isprocessing = true
  const data = this.form.value
  delete data['confirm']
  this.auth.signup(data)
  .subscribe(res=>{
    if(res.success){
      this.isprocessing = false
      this.message = "Account Created"
      this.className = 'alert alert-success'
      this.router.navigate(["/login"]);
    }else{
      this.isprocessing = false
      this.message = res.message
      this.className = 'alert alert-danger'
    }
    // alert("suuces")
  },err=>{
    // alert("Error happen")
      this.isprocessing = false
      this.message = "Server Error"
      this.className = 'alert alert-danger'
  })
}

getClassName() {
  return this.className
}
}
