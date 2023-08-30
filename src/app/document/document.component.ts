import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../services/procedure.service';
import { Dossier } from './dossier';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  constructor(private procedureService: ProcedureService){

  }

  ngOnInit(): void {
    this.document = this.procedureService.getDocument()
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
}
