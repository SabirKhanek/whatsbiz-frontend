import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { SocketService } from '../services/socket/socket.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, combineLatest, takeUntil } from 'rxjs';

import QRCode from 'qrcode';

@Component({
  selector: 'whatsapp-connection',
  templateUrl: './whatsapp-connection.component.html',
  styleUrls: ['./whatsapp-connection.component.scss']
})
export class WhatsappConnectionComponent implements OnInit, OnDestroy {
  serviceDestructor = new Subject();
  eventData: any = '';
  qrCode: string = '';
  isWAConnected: boolean = false;

  constructor(private socketService: SocketService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.generateQRCode()
    this.socketService.listenToQREevent().pipe(takeUntil(this.serviceDestructor)).subscribe((data: any) => {
      console.log(data);
      this.eventData = data;
      this.generateQRCode();
    });

    this.socketService.isWAConnected().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
      // if (res.result) { this.isWAConnected = true; }
      // this.router.navigate(['/dashboard'])
      this.isWAConnected = res.result;
      this.toastr.success(res.result ? 'Connected' : 'Disconnected', 'Whatsapp Connection Update')
    })

    combineLatest([
      this.socketService.listenToDisconnectedEvent(),
      this.socketService.isWAConnected()
    ]).pipe(takeUntil(this.serviceDestructor)).subscribe(([res, isWAConnected]) => {
      this.isWAConnected = isWAConnected.result;
      if (!isWAConnected.result) {
        this.toastr.error(res.disconnectReason, 'Whatsapp Disconnected');
      }

      if (isWAConnected.result) {
        this.toastr.success('Connected... reload the page.', 'Whatsapp Connection Update')
      }
    });

    this.socketService.listenToConnectedEvent().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
      this.isWAConnected = true;
      this.toastr.success(`Connected as ${res.username} with id: ${res.id}`, 'Whatsapp Connected')
    });

    this.socketService.listenToConnectingEvent().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
      this.toastr.info('Connecting...', 'Whatsapp Connection Update')
    })
  }

  ngOnDestroy(): void {
    this.serviceDestructor.next(1);
    this.serviceDestructor.complete();
  }

  triggerWASocketRestart() {
    this.socketService.restartWASocket().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
      this.toastr.info(res.result, 'Whatsapp Socket Restart')
    })
  }

  generateQRCode() {
    QRCode.toDataURL(this.eventData, { width: 300, margin: 1 }, (error: any, url: string) => {
      if (error) {
        console.error(error);
      }
      this.qrCode = url;
    });
  }

  logoutWA() {
    this.socketService.logoutWASocket().pipe(takeUntil(this.serviceDestructor)).subscribe()
  }
}
