import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

//this function won't let you enter when you are logged in
export const authGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService)
    let isLoggedIn : boolean;
    const token = localStorage.getItem('token');

    if(token){
      isLoggedIn = true
      router.navigate(['procedures']);
      return !isLoggedIn;
    }

    /*authService.isLoggedIn$.subscribe((value) => {
      isLoggedIn = value;

      if(isLoggedIn) {
        router.navigate(['procedures']);
      }
      return !isLoggedIn;
    });*/

    return true;

}