import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputfunctionsService {

  constructor() { }
  detectErrors(event: any, error: any): void{
    const clickedElement = event;
    clickedElement.style.borderColor = error? "#ff0000" : "#00ff00";
  }

  commitErrors(event: any, error: any): void{
    const clickedElement = event;
    clickedElement.style.borderColor = error? "#ff0000" : "#0075FF";
  }
}
