import { Role } from './../models/role.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userRole:string=null;
  constructor() { }
  checkValiduser(uname:string, pass:string): boolean{
    if (uname=="admin" && pass=="admin"){
      localStorage.setItem("username","admin")
      this.userRole = Role.Admin;
      localStorage.setItem("Role","Admin");
      console.log(this.userRole);
      return true;
    }
    else if (uname=="user" && pass=="user"){
      localStorage.setItem("username","user")
      this.userRole = Role.User;
      localStorage.setItem("Role","User");

      console.log(this.userRole);
      return true;
    }
    else
    return false;
  }
}
