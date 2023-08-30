import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile-dpaw',
  templateUrl: './profile-dpaw.component.html',
  styleUrls: ['./profile-dpaw.component.css']
})
export class ProfileDpawComponent {

  constructor(private dataService: DataService, private auth: AuthService, private router: Router){

  }
  
  checkWindowVisibility: boolean = false;

  activateCheckMode(){
    this.checkWindowVisibility = true;
  }

  finishCheckMode(){
    this.checkWindowVisibility = false
  }

  receiveMessage(){
    this.activateCheckMode();
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
}
