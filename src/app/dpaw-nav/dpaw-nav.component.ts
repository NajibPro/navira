import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dpaw-nav',
  templateUrl: './dpaw-nav.component.html',
  styleUrls: ['./dpaw-nav.component.css']
})
export class DpawNavComponent implements OnInit{

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavElementsList();
      }
    });
  }

  navElementsList = [false, false];
  selectedIndex = 1;

  updateNavElementsList() {
    const currentRoute = this.router.url;
    console.log(currentRoute)

    if (currentRoute === '/proceduresDPAW') {
      this.navElementsList[0] = true;
      return;
    } else if (currentRoute === '/profile') {
      this.navElementsList[1] = true;
    } else {
      this.navElementsList[0] = true;
    }
  }

  animateNav(n: number) {
    this.navElementsList = this.navElementsList.map((value, index) => index === n);
    this.selectedIndex = n;
  }

  navVisibile = false

  toggleNavVisibility(){
    this.navVisibile = !this.navVisibile
  }
}
