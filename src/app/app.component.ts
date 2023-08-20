import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((value) => {
      this.isLoggedin = value;
    });

    this.authService.role$.subscribe((value) => {
      this.role = value;
    })
  }

  isLoggedin = false;
  role = 'visitor';
  title = 'navira-app';
}