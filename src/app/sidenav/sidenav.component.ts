import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input('isExpanded') isActive = false;
  @Output('isExpandedChange') isActiveChange = new EventEmitter<boolean>();

  routerURL = ''
  constructor(private router: Router) {
  }


  navLinks = [
    {
      route: '/dashboard',
      name: 'Home',
      materialIcon: 'home',
    }, {
      route: '/whatsapp-connection',
      name: 'Whatsapp Connection',
      materialIcon: 'qr_code_2',
    }, {
      route: 'core-ui',
      name: 'Core UI',
      materialIcon: 'code_blocks',
      seperator: true,
    }, {
      route: '/wa-group-collections',
      name: 'Group Collections',
      materialIcon: 'group',
    }, {
      route: '/post-ad',
      name: 'Post Ad',
      materialIcon: 'post_add_outline',
      seperator: true
    }, {
      route: '/products',
      name: 'Products',
      materialIcon: 'shopping_cart',
      expanded: true,
      subMenus: [
        {
          route: '/products',
          name: 'Sell',
        }, {
          route: '/products',
          name: 'Buy',
        }
      ]
    }, {
      route: '/chat',
      name: 'Messages',
      materialIcon: 'chat',
    }, {
      route: '/settings',
      name: 'Settings',
      materialIcon: 'settings',
    }, {
      route: '/logout',
      name: 'Logout',
      materialIcon: 'logout',
    }
  ]

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
    this.isActiveChange.emit(this.isActive);
  }
  menuToggle() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
