import { Component, OnInit } from '@angular/core';

import { SocketService } from '../services/socket/socket.service';
import { ToastrService } from 'ngx-toastr';
import { combineLatest } from 'rxjs';

import QRCode from 'qrcode';

@Component({
  selector: 'app-socket-test',
  templateUrl: './socket-test.component.html',
  styleUrls: ['./socket-test.component.css']
})
export class SocketTestComponent implements OnInit {
  eventData: any = '';
  qrCode: string = '';
  isWAConnected: boolean = false;

  constructor(private socketService: SocketService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.generateQRCode()
    this.socketService.listenToQREevent().subscribe((data: any) => {
      console.log(data);
      this.eventData = data;
      this.generateQRCode();
    });

    this.socketService.isWAConnected().subscribe((res) => {
      if (res.result) { this.isWAConnected = true; }
      this.toastr.success(res.result ? 'Connected' : 'Disconnected', 'Whatsapp Connection Update')
    })

    combineLatest([
      this.socketService.listenToDisconnectedEvent(),
      this.socketService.isWAConnected()
    ]).subscribe(([res, isWAConnected]) => {
      this.isWAConnected = isWAConnected.result;
      if (!isWAConnected.result) {
        this.toastr.error(res.disconnectReason, 'Whatsapp Disconnected');
      }

      if (isWAConnected.result) {
        this.toastr.success('Connected... reload the page.', 'Whatsapp Connection Update')
      }
    });

    this.socketService.listenToConnectedEvent().subscribe((res) => {
      this.isWAConnected = true;
      this.toastr.success(`Connected as ${res.username} with id: ${res.id}`, 'Whatsapp Connected')
    });

    this.socketService.listenToConnectingEvent().subscribe((res) => {
      this.toastr.info('Connecting...', 'Whatsapp Connection Update')
    })
  }

  triggerWASocketRestart() {
    this.socketService.restartWASocket().subscribe((res) => {
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
}
