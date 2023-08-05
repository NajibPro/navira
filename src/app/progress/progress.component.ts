import { Component, HostListener } from '@angular/core';
import { progress } from './progress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
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

  progressList: progress[] = [
    {
      procedure_number: 5,
      is_sent: true,
      is_waiting: true,
      is_accepted: false,
      is_refused: false
    },

    {
      procedure_number: 3,
      is_sent: true,
      is_waiting: false,
      is_accepted: false,
      is_refused: false
    },

    {
      procedure_number: 1,
      is_sent: true,
      is_waiting: true,
      is_accepted: true,
      is_refused: false
    },

    {
      procedure_number: 20,
      is_sent: true,
      is_waiting: true,
      is_accepted: false,
      is_refused: true
    }
  ]
}
