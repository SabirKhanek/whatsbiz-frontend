import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './services/socket/socket.service';
import { SocketTestComponent } from './socket-test/socket-test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppMatModule } from './utils/app-mat/app-mat.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    SocketTestComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AppMatModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
