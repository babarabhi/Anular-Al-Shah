import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authSevice:AuthService) { }

  // username:string;
  // password: string;
  msg;

  ngOnInit(): void {
  }

  login(user:string,pass:string){
    let output = this.authSevice.checkValiduser(user,pass);
    if (output==true)
    {
      this.router.navigate(["/dashboard"])
    }
    else
    // this.router.navigate(["/login"])
    this.msg="Invalid username or password"
    
  }

}
