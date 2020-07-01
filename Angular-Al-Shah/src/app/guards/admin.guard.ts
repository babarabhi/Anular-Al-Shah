import { Role } from './../models/role.enum';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    // return true;
    console.log("localStorage.getItem ", localStorage.getItem("Role"))
    if (localStorage.getItem("Role") =="Admin") {
      // role not authorised so redirect to home page
      return true;
    }
    else{
      alert("Please Login as Admin")
    this.router.navigate(["/login"])
      return false;
    }

  }
  
}
