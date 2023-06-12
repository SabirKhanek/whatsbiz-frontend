import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input('isExpanded') isActive = false;
  routerURL = ''
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.routerURL = this.router.url
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(this.router.url)
        this.routerURL = this.router.url
      }
    });
  }

  toggleSidebar() {
    this.isActive = !this.isActive;
  }
  menuToggle() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
