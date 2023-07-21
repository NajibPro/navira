import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService, private router : Router){

  }

  formData = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
      
  }
  signup = '/signup';
  login = '/login';
  procedures = '/procedures';

  onSubmit() {
    const { email, password } = this.formData;
    this.authService.login(email, password).subscribe(
      (response) => {
        this.router.navigate([this.procedures]);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
