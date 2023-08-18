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
        localStorage.setItem('token', token);
        console.log("the response: ", response.token);
        this.router.navigate([this.procedures]);
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
