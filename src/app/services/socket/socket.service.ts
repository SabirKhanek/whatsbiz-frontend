import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Socket } from 'ngx-socket-io';
import { ClientConnectEvent, ClientDisconnectEvent, NewWAMessage } from 'src/app/types/whatsapp-socket.type';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

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
    return this.http.get<{ result: boolean }>('http://localhost:3000/api/is-wa-connected');
  }

  restartWASocket() {
    return this.http.post<{ result: string }>('http://localhost:3000/api/restart-wa', {})
  }
}
