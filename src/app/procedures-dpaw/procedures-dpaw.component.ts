import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-procedures-dpaw',
  templateUrl: './procedures-dpaw.component.html',
  styleUrls: ['./procedures-dpaw.component.css']
})
export class ProceduresDpawComponent{

  @ViewChild('actionList') actionList?: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private renderer: Renderer2) {}

  // Toggle action list visibility
  toggleActionList(n: number): void {
    const target = this.actionList?.toArray()[n];
    if(target){
      target.nativeElement.style.visibility = 'visible';
    }
    
  }

  // Close action list
  closeActionList(): void {
    this.actionList?.forEach((list) => list.nativeElement.style.visibility = 'hidden')
  }

  // Close action list when clicking outside
  @HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent): void {
  let hasToClose = true;

  this.actionList?.forEach((list) => {
    if ((list.nativeElement as Node).contains(event.target as Node)) {
      hasToClose = false;
    }
  });

  if (hasToClose) {
    this.closeActionList();
  }
}
}

  


