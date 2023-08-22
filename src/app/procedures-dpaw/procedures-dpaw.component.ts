import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import { ProcedureService } from '../services/procedure.service';
import { Demand } from './request';

@Component({
  selector: 'app-procedures-dpaw',
  templateUrl: './procedures-dpaw.component.html',
  styleUrls: ['./procedures-dpaw.component.css']
})
export class ProceduresDpawComponent implements OnInit{

  constructor(private renderer: Renderer2, private procedureService: ProcedureService) {}

  ngOnInit(): void {
    this.requestList = this.procedureService.getRequests();

    this.forYouRequests = this.requestList.filter(request => request.for_you);
    this.otherRequests = this.requestList.filter(request => !request.for_you);

    this.forYouRequests.sort((a, b) => a.duration.getTime() - b.duration.getTime());
    this.otherRequests.sort((a, b) => a.duration.getTime() - b.duration.getTime());

    console.log("For You Requests:", this.forYouRequests);
    console.log("Other Requests:", this.otherRequests);
  }

  document = '/document';

  
  actionList: NodeListOf<Element> | undefined;
  index: number = 0;

  handleActionListIconClick(event: MouseEvent, n: number): void {
    event.preventDefault();
    event.stopPropagation(); // Prevent propagation to parent elements
    this.toggleActionList(n);
  }

  // Toggle action list visibility
  toggleActionList(n: number): void {
    debugger;
    this.actionList = document.querySelectorAll('.action-list');
    if(this.actionList){
      const target = this.actionList[n];
      if(target){
        target.classList.add('visible');
      }
    }

    
  }

  // Close action list
  closeActionList(): void {
    this.actionList = document.querySelectorAll('.action-list');
    this.actionList?.forEach((list) => list.classList.remove('visible'))
  }

  // Close action list when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    let hasToClose = true;
    this.actionList = document.querySelectorAll('.action-list');

    this.actionList?.forEach((list) => {
      if ((list as Node).contains(event.target as Node)) {
        hasToClose = false;
      }
    });

    if (hasToClose) {
      this.closeActionList();
    }
  }

  calculateTimeDifference(targetDate: Date): string {
    const now = new Date();
    const timeDifference = now.getTime() - targetDate.getTime();
  
    if (timeDifference < 60000) { // One minute in milliseconds
      return 'Just maintenant';
    }
  
    if (timeDifference < 3600000) { // One hour in milliseconds
      const minutes = Math.floor(timeDifference / 60000);
      return `Il y a ${minutes} minutes`;
    }
  
    if (timeDifference < 86400000) { // One day in milliseconds
      const hours = Math.floor(timeDifference / 3600000);
      return `Il y a ${hours} heurs`;
    }
  
    const days = Math.floor(timeDifference / 86400000);
    return `Il y a ${days} jours`;
  }

  updateDynamicText(inputNumber: number) {
    let add_zero = "";
    if(inputNumber < 10){
      add_zero = "0"
    }
      return "Procédure " + add_zero + inputNumber;
  }


  requestList!: Demand[];
  forYouRequests!: Demand[]
  otherRequests!: Demand[]
}

  


