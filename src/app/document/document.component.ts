import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {

  }

  validationMode: boolean = false;

  startValidationMode(){
    this.validationMode = true;
  }

  finishValidationMode(){
    this.validationMode = false;
  }
}
