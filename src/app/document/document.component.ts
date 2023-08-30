import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../services/procedure.service';
import { Dossier } from './dossier';
import * as _ from 'lodash';
import { ProfileService } from '../services/profile.service';
import { User } from './user';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  constructor(private procedureService: ProcedureService, private profileService: ProfileService){

  }

  ngOnInit(): void {
    this.document = this.procedureService.getDocument()
    this.documentCopy = this.procedureService.getDocument()
    this.userInfo = this.profileService.getUserInfo()
  }

  isArray(variable: string | string[]): string[] {
    if(Array.isArray(variable)){
      return variable;
    } else {
      return [];
    }
    
  }

  validationMode: boolean = false;
  document!: Dossier;
  documentCopy!: Dossier;
  userInfo!: User;

  startValidationMode(){
    this.validationMode = true;
  }

  finishValidationMode(){
    this.validationMode = false;
  }

  openImageWindow(imageToDisplay: string | string[] | ArrayBuffer | null): void {
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

  validateInfo(event: MouseEvent, n: number, correctness: boolean){
    event.preventDefault();
    event.stopPropagation();
    debugger;
    this.document.info[n].isCorrect = correctness;
    console.log(this.document.info)
  }

  cancelChanges(){
    this.document = _.cloneDeep(this.documentCopy);
  }

  saveChanges(){
    this.documentCopy = _.cloneDeep(this.document)
  }
}
