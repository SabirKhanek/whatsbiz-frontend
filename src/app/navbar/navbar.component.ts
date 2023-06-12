import { AuthService } from './../services/auth/auth.service';
import { SocketService } from './../services/socket/socket.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output('sideBarToggled') sideBarToggleEvent = new EventEmitter();
  serviceDestructor = new Subject();
  routerURL = ''
  constructor(private router: Router, private socket: SocketService, private authService: AuthService) {
  }

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.serviceDestructor)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerURL = this.router.url
      }
    });
  }

  ngOnDestroy(): void {
    this.serviceDestructor.next(1)
    this.serviceDestructor.complete()
  }

  getActiveUser() {
    return this.authService.getActiveUser()
  }

  logoutWA() {
    this.authService.logOut()
    // this.socket.logoutWASocket().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
    //   console.log(res)
    // })
  }
}
