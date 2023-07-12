import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Socket } from 'ngx-socket-io';
import { ClientConnectEvent, ClientDisconnectEvent, NewWAMessage } from 'src/app/types/whatsapp-socket.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  baseUrl = environment.apiUrl
  constructor(private socket: Socket, private http: HttpClient) { }

  listenToQREevent() {
    return this.socket.fromEvent<NewWAMessage>('wa-qr');
  }

  listenToMessageEvent() {
    return this.socket.fromEvent<NewWAMessage>('new-text-message');
  }

  listenToConnectedEvent() {
    return this.socket.fromEvent<ClientConnectEvent>('wa-connected');
  }

  listenToDisconnectedEvent() {
    return this.socket.fromEvent<ClientDisconnectEvent>('wa-disconnected');
  }

  listenToConnectingEvent() {
    return this.socket.fromEvent('wa-connecting');
  }

  isWAConnected() {
    return this.http.get<{ result: boolean }>(this.baseUrl + 'whatsapp/is-wa-connected', {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    });
  }

  restartWASocket() {
    return this.http.post<{ result: string }>(this.baseUrl + 'whatsapp/restart-wa', undefined, {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    })
  }

  logoutWASocket() {
    return this.http.post<{ result: string }>(this.baseUrl + 'whatsapp/logout', undefined, {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    })
  }

  sendMessageWA(message: string, phoneNumber: string) {
    return this.http.post<{ result: string }>(this.baseUrl + 'whatsapp/send-message', { number: phoneNumber, message }, {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    })
  }
}
