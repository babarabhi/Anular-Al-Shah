import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl:'./navigator.component.html' ,
  styles:['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("username");
  }

  isLogin():boolean{
    if (localStorage.getItem("username") != null){
      return true;
    }
    else 
    return false;

  }

}
