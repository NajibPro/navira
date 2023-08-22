import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

//this function won't let you enter when you aren't a DPAW
export const authDPAWGuard = () => {
    const router = inject(Router);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if(!token){
      router.navigate(['']);
      return false;
    }

    if(role){
        if(role != 'dpaw'){
            if(role === 'user'){
                router.navigate(['/procedures'])
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