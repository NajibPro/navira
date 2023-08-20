import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

//this function won't let you enter when you are logged in
export const authGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService)
    let isLoggedIn : boolean;
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if(token){
      isLoggedIn = true
      if(role){
        if(role === 'dpaw'){
          router.navigate(['proceduresDPAW'])

        } else if(role === 'user'){
          router.navigate(['procedures']);

        } else if(role === 'admin'){
          router.navigate(['']);
          console.log('admin is here!!')
          
        }
      }
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