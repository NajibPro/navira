import { inject } from "@angular/core";
import { Router } from "@angular/router";

//this function won't let you enter when you are NOT logged in
export const authrevGard = () => {
    const router = inject(Router);
    const token = localStorage.getItem('token');

    if(!token){
      router.navigate(['']);
      return false;
    }

    return true;
}