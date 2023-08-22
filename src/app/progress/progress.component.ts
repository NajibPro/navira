import { Component, HostListener } from '@angular/core';
import { progress } from './progress';
import { ProcedureService } from '../services/procedure.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  constructor(private procedureService: ProcedureService){

  }
  dynamicText: string = "Procedure XX:";
  isMobileView: boolean = false;

  // Listen to the window resize event to detect changes in viewport width
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.isMobileView = window.innerWidth < 500;
  }

  // Update the text based on the viewport width
  updateDynamicText(inputNumber: number) {
    let add_zero = "";
    if(inputNumber < 10){
      add_zero = "0"
    }
    if (this.isMobileView) {
      return add_zero + inputNumber + ":";
    }
      return "Procedure " + add_zero + inputNumber + ":";
  }

  // Call the update method initially to set the correct text
  ngOnInit() {
    this.onWindowResize(null);
  }

  progressList: progress[] = this.procedureService.getProgresses()
}
