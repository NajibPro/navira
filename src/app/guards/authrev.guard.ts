import { inject } from "@angular/core";
import { Router } from "@angular/router";

//this function won't let you enter when you are NOT a user
export const authrevGard = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

    if(!token){
      router.navigate(['']);
      return false;
    }

    if(role){
      if(role != 'user'){
          if(role === 'dpaw'){
              router.navigate(['/proceduresDPAW'])
          } else if(role === 'admin'){
              router.navigate(['']);
              console.log('an admin is here');
          }

          return false;
      } else {
          return true;
      }
  } else {
      return false;
  }

    return true;
}