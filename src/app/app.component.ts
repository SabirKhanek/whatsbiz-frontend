import { combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private socket: SocketService, private router: Router) { }
  ngOnInit(): void {
    this.socket.listenToConnectedEvent().subscribe((res) => {
      this.router.navigate(['dashboard']);
    })

    combineLatest([
      this.socket.listenToDisconnectedEvent(),
      this.socket.isWAConnected()
    ]).subscribe(([res, isWAConnected]) => {
      if (!isWAConnected.result) {
        this.router.navigate(['login']);
      }
    })

  }
}

