import { AuthService } from './../services/auth.service';
import { NavigatorComponent } from './../Layouts/navigator/navigator.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  routes:any;
  constructor(private router:Router, private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if (localStorage.getItem("username") != null)
      {
        if (next.data.roles && next.data.roles.indexOf(this.authService.userRole) === 2) {
          // role not authorised so redirect to home page
          this.router.navigate(['/']);
          return false;
      }

      // authorised so return true
      return true;
      }
        // return true;
      else
      {
        this.router.navigate(["/login"])
      }
        return false;
  }
  
}
