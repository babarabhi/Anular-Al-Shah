import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkValiduser(uname:string, pass:string): boolean{
    if (uname=="admin" && pass=="admin"){
      localStorage.setItem("username","admin")
      return true;
    }
    else
    return false;
  }
}
