import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit{
  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavElementsList();
      }
    });
  }

  navElementsList = [false, false, false];
  selectedIndex = 1;

  updateNavElementsList() {
    const currentRoute = this.router.url;
    console.log(currentRoute)

    if (currentRoute === '/procedures') {
      this.navElementsList[0] = true;
      return;
    } else if (currentRoute === '/progress') {
      this.navElementsList[1] = true;
      return;
    } else if (currentRoute === '/profile') {
      this.navElementsList[2] = true;
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
