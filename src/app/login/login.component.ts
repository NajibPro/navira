import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService, private router : Router){

  }

  formData = {
    userName: '',
    password: ''
  };

  showErrors : boolean = false;

  ngOnInit(): void {
      
  }
  signup = '/signup';
  login = '/login';
  procedures = '/procedures';
  proceduresDPAW = '/proceduresDPAW'

  backendErrors: any;
  backendErrorKeys: string[] = [];

  @ViewChild('logInForm') logInForm!: NgForm;
  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef>;

  detectErrors(event: any, error: any): void{
    const clickedElement = event;
    clickedElement.style.borderColor = error? "#ff0000" : "#00ff00";
  }

  commitErrors(event: any, error: any): void{
    const clickedElement = event;
    clickedElement.style.borderColor = error? "#ff0000" : "#0075FF";
  }

  onSubmit() {
    if(this.logInForm.invalid){
      this.showErrors = true;
      this.inputElements.forEach(input => {
        this.commitErrors(input.nativeElement, input.nativeElement.invalid)
      });
      return;
    }
    const { userName, password } = this.formData;
    this.authService.login(userName, password).subscribe(
      (response: any) => {
        this.backendErrors = null;
        this.authService.isLoggedInSubject.next(true)
        const token = response.token;
        let role: string;
        if(response.is_administrator){
          role = 'admin';
          this.router.navigate(['']);

        } else if(response.is_DPAW){
          role = 'dpaw'
          this.router.navigate([this.proceduresDPAW]);

        } else if(response.is_simple_user){
          role = 'user'
          this.router.navigate([this.procedures]);

        } else {
          console.error("couldn't identify user type so we put it as user anyway!!")
          role = 'user'
          this.router.navigate([this.procedures]);
          
        }

        localStorage.setItem('role', role);
        this.authService.roleSubject.next(role);
        
        localStorage.setItem('token', token);
        console.log("the response: ", response.token);
        window.scrollTo(0, 0);
      },
      (error) => {
        this.backendErrors = error.error.errors;
        this.backendErrorKeys = Object.getOwnPropertyNames(this.backendErrors);
        console.error('Login failed:', error);
        window.scrollTo(0, 0);
      }
    );
  }

}
