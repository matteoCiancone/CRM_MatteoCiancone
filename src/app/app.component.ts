import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epicodeFrontEnd';
  
  ifLogged:boolean = this.authService.ifLogged;

constructor(private authService:AuthService, private router:Router){

}

ngOnInit(): void {
 this.router.events.subscribe(()=>{
  this.ifLogged = this.authService.isLogged()
 });
 //this.ifLogged = this.authService.ifLogged

 

}

}



