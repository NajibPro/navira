import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile-side-bar',
  templateUrl: './profile-side-bar.component.html',
  styleUrls: ['./profile-side-bar.component.css']
})
export class ProfileSideBarComponent implements OnInit{

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.currentProfileContent.subscribe(
      (profileContent) => {
        this.profileContent = profileContent;
      }
    )
  }

  contentchanger(contentchosen: number){
    for(let i = 0; i < this.profileContent.length; i++){
      if(i !== contentchosen){
        this.profileContent[i] = false;
      }else{
        this.profileContent[i] = true;
      }
    }

    this.dataService.switchProfileContent(this.profileContent)
  }

  profileContent!: boolean[];
  @Output() logoutCheckEvent = new EventEmitter<boolean>();

  ActivateLogoutCheckMode(){
    this.logoutCheckEvent.emit(true)
  }
}
