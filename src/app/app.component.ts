import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SocketService } from './services/socket/socket.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isSideNavExpanded = false;
  routerURL: string = '';
  constructor(private socket: SocketService, private router: Router, private authService: AuthService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.authService.validateToken().subscribe({
      next: (res) => {
        this.authService.setLoggedIn(true)
        // this.router.navigate(['/dashboard'])
        this.router.navigate(['/core-ui'])
        const payload = atob((localStorage.getItem('jwt') || '').split('.')[1]);
        this.toastr.success('Welcome back ' + JSON.parse(payload).username);
      }, error: (err) => {

        this.authService.setLoggedIn(false)
        this.router.navigate(['/login'])
      }
    })

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerURL = this.router.url
      }
    });

    // this.socket.listenToConnectedEvent().subscribe((res) => {
    //   if (this.router.url === 'whatsapp-connection') {
    //     this.router.navigate(['dashboard']);
    //   }
    // })

    // this.socket.isWAConnected().subscribe((res) => {
    //   if (!res.result) {
    //     this.router.navigate(['whatsapp-connection']);
    //   } else {
    //     this.router.navigate(['dashboard']);
    //   }
    // })

    // this.socket.listenToDisconnectedEvent().subscribe((res) => {
    //   this.router.navigate(['whatsapp-connection']);
    // })
  }

  updateSideNavActiveState() {
    this.isSideNavExpanded = !this.isSideNavExpanded;
  }

  ngOnDestroy() {
    console.log('app destroyed');
  }
}

