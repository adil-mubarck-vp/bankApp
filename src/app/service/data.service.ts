import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // data base

  db: any = {
    1000: { "acno": 1000, "username": "lalu", "password": 1000, "balance": 50000 }
  }

  constructor() { }
  login(acno: any, pswd: any) {


    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        return true
      }
      else {
        alert("incorectpassword")
        return false
      }
    }
    else {
      alert("userdoes not exizt")
      return false
    }


  }
  // register

  register(username: any, acno: any, password: any) {
    let db = this.db

    if (acno in db) {
      return false
    }
    else {
      //  insert in db
      db[acno] = {
        acno,
        username,
        password,
        "balance": 0
      }
      return true
    }
  }

  // deposit
  deposit(acno:any,password:any,amt:any){
var amount=parseInt(amt)
let db=this.db
if(acno in db){

  if(password==db[acno]["password"]){

db[acno]["balance"]+=amount
return db[acno]["balance"]

  }
  else{
    alert("incorectpassword")
    return false 
  }
}
else{
  alert("user does not exist")
  return false
}

  }
// withdraw

withdraw(acno:any,password:any,amt:any){
  var amount=parseInt(amt)
  let db=this.db
  if(acno in db){
  
    if(password==db[acno]["password"]){

      if(db[acno]["balance"]>amount){
        db[acno]["balance"]-=amount
        return db[acno]["balance"]
      }
      else{
        alert("insufficient balance")
        return false
      }
  
    }
    else{
      alert("incorectpassword")
      return false 
    }
  }
  else{
    alert("user does not exist")
    return false
  }
  
    }



}
