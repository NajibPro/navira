import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private dataService: DataService, private auth: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.dataService.currentProfileContent.subscribe(
      (profileContent) => {
        for(let i = 0; i < profileContent.length; i++){
          if(profileContent[i]){
            this.contentchanger(i)
            break;
          }
        }
        this.profileContent = profileContent;
      }
    )
  }

  // display: [account info, or notifications, or files, or help section]
  profileContent: boolean[] = [true, false, false, false];
  profileContentTitle!: string;
  checkWindowVisibility: boolean = false;
  profilePic = '../../assets/imgs/profile-pic.jpg';
  

  contentchanger(contentchosen: number){
    for(let i = 0; i < this.profileContent.length; i++){
      if(i !== contentchosen){
        this.profileContent[i] = false;
      }else{
        this.profileContent[i] = true;
      }
    }

    switch (contentchosen) {
      case 0:
        this.profileContentTitle = "Modifier le profile"
        break;

      case 1:
        this.profileContentTitle = "Les notifications"
        break;

      case 2:
        this.profileContentTitle = "Mes fichier"
        break;

      case 3:
        this.profileContentTitle = "Aide"
        break;
    
      default:
        this.profileContentTitle = "Modifier le profile"
        break;
    }
  }

  activateCheckMode(){
    this.checkWindowVisibility = true;
  }

  finishCheckMode(){
    this.checkWindowVisibility = false
  }

  receiveMessage(){
    this.activateCheckMode();
  }

  receiveProfilePic(event: any){
    this.profilePic = event;
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }
  
}
