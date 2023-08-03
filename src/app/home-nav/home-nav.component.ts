import { Component } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent {
  constructor(){

  }

  navElementsList = [true, false, false];
  selectedIndex = 1;

  animateNav(n: number) {
    this.navElementsList = this.navElementsList.map((value, index) => index === n);
    this.selectedIndex = n;
  }
}
