import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Al-Shah';
  admin:boolean=false;

  ngOnInit(){
    if (localStorage.getItem("Role")=="Admin")
      this.admin=true;
    else
    this.admin=false;


  }
  ngOnChanges(){
    if (localStorage.getItem("Role")=="Admin")
      this.admin=true;
    else
      this.admin=false;
  }
}
