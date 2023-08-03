import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthrevGardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let isLoggedIn : Boolean;
    this.authService.isLoggedIn$.subscribe((value) => {
      isLoggedIn = value;

      if(!isLoggedIn) {
        this.router.navigate(['']);
      }
      return isLoggedIn;
    });

    return true;
  }
}
