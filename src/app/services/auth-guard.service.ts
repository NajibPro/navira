import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {

    let isLoggedIn : boolean;
    const token = localStorage.getItem('token');

    if(token){
      isLoggedIn = true
      return isLoggedIn;
    }

    this.authService.isLoggedIn$.subscribe((value) => {
      isLoggedIn = value;

      if(isLoggedIn) {
        this.router.navigate(['procedures']);
      }
      return !isLoggedIn;
    });

    return true;
  }

}
