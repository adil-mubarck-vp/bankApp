import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="perfect ok"
  // accno="username plese "
  acno=""
  pswd=""

    // data base

    // db:any={
    //   1000:{"acno":1000,"username":"lalu","password":1000,"balance":50000}
    // }
// dependency injection
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }  

  // user function
// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno)
// }

// pswdChange(event:any){
//   this.pswd=event.target.value
//   console.log(this.pswd)
// }


 login(){
var acno=this.acno
var pswd=this.pswd

const result=this.ds.login(acno,pswd)
if(result){
  alert("login succesful")
  this.router.navigateByUrl('home')
}

  }


// template refrence


// login(a:any,p:any){
//   console.log(a.value);
  
//   var acno=a.value
//   var pswd=p.value
  
//   let db=this.db
  
//   if(acno in db){
//     if(pswd==db[acno]["password"]){
//       alert("login succeful")
//     }
//     else{
//       alert("incorectpassword")
//     }
//   }
//   else{
//     alert("userdoes not exizt")
//   }
  
//     }



}
