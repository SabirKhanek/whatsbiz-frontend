import { ToastrService } from 'ngx-toastr';
import { SocketService } from './../services/socket/socket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  messageContent = ''
  phoneNumber = ''

  serviceDestructor = new Subject();

  constructor(private socketService: SocketService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.socketService.listenToMessageEvent().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
      this.toastr.info(`Message from ${res.authorName}: ${res.messageContent}`, 'New message')
    })
  }

  // logoutWA() {
  //   this.socketService.logoutWASocket().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
  //     this.toastr.success('Logged out', 'WA Connection Update')
  //   })
  // }

  ngOnDestroy(): void {
    this.serviceDestructor.next(1);
    this.serviceDestructor.complete();
  }

  sendMessageWA() {
    this.socketService.sendMessageWA(this.messageContent, this.phoneNumber).pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
      this.toastr.success('Message sent', 'Acknowledgement')
    })
  }
}
