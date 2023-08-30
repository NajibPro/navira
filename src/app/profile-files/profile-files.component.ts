import { Component, OnInit } from '@angular/core';
import { Paper } from './paper';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-files',
  templateUrl: './profile-files.component.html',
  styleUrls: ['./profile-files.component.css']
})
export class ProfileFilesComponent implements OnInit{

  constructor(private profileService: ProfileService){

  }

  ngOnInit(): void {
    this.profileFiles = this.profileService.getFiles();
  }

  profileFiles!: Paper[];
  currentTime = new Date()


  openImageWindow(imageToDisplay: string | ArrayBuffer | null): void {
    if (imageToDisplay) {
      const imageWindow = window.open('', '_blank');
      if (imageWindow) {
        const doc = imageWindow.document;
        doc.open();
        doc.write(`<img src="${imageToDisplay}" alt="Uploaded Image">`);
        doc.close();
      }
    }
  }
}
