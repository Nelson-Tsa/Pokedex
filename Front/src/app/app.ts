import { Component, inject, OnDestroy } from "@angular/core";
import { MonsterList } from "./pages/monster-list/monster-list";
import { Router, RouterOutlet } from "@angular/router";
import { Login } from "./pages/login/login";
import { LoginService } from "./services/login/login";
import { Subscription } from "rxjs";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports :[RouterOutlet,MatToolbarModule,MatIconModule,MatButtonModule],
 templateUrl :'./app.html',
  styleUrls: ['./app.css'],
  
})
export class App implements OnDestroy {
private router = inject(Router);
LoginService = inject(LoginService)
private logoutSubscription: Subscription | null = null;


logOut(){
this.logoutSubscription = this.LoginService.logOut().subscribe({
  next: () => {
    this.navigateToLogin();
  },
  error: () => {
    this.navigateToLogin();
  }
})
}

navigateToLogin(){
  this.router.navigate(['login']);
}

navigateHome(){
  this.router.navigate(['home']);
}


ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.logoutSubscription?.unsubscribe();
}
}
