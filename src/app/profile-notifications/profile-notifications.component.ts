import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Note } from './notification';

@Component({
  selector: 'app-profile-notifications',
  templateUrl: './profile-notifications.component.html',
  styleUrls: ['./profile-notifications.component.css']
})
export class ProfileNotificationsComponent implements OnInit{

  constructor(private profileService: ProfileService){

  }

  ngOnInit(): void {
    this.notifications = this.profileService.getNotifications();
    this.notificationMessages = this.notifications.map(notification => this.manageMessageLength(notification.message));
    this.showExpandEndicator = this.notifications.map((notification, i) => notification.message !== this.notificationMessages[i]);
  }

  notifications!: Note[];
  notificationMessages!: string[];
  showExpandEndicator!: boolean[];


  expandNoteText(n: number){
    let dynamicText = document.querySelectorAll('.notification-message');
    //dynamicText[n].classList.toggle('cutoff-text');
    if(this.notifications[n].message !== this.notificationMessages[n]){
      this.notificationMessages[n] = this.notifications[n].message;
    } else {
      this.notificationMessages[n] = this.manageMessageLength(this.notifications[n].message);
    }
  }

  deleteNote(n: number){
    if (n >= 0 && n < this.notifications.length) {
      this.notifications.splice(n, 1); // Remove 1 element at the specified index
      this.notificationMessages = this.notifications.map(notification => this.manageMessageLength(notification.message));
      this.showExpandEndicator = this.notifications.map((notification, i) => notification.message !== this.notificationMessages[i]);
    } else {
      console.log("Invalid index");
    }
  }

  handleCloseClicks(event: MouseEvent, n: number){
    event.preventDefault();
    event.stopPropagation(); // Prevent propagation to parent elements

    this.deleteNote(n);
  }

  handleLinkClicks(event: MouseEvent, n: number){
    event.preventDefault();
    event.stopPropagation(); // Prevent propagation to parent elements

    this.expandNoteText(n);
  }

  manageMessageLength(message: string){
    if (message.length <= 161) {
      return message;
    } else {
      return message.slice(0, 161) + '...';
    }
  }
}
