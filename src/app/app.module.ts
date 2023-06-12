import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './services/socket/socket.service';
import { WhatsappConnectionComponent } from './whatsapp-connection/whatsapp-connection';
import { NavbarComponent } from './navbar/navbar.component';
import { AppMatModule } from './utils/app-mat/app-mat.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';
import { CoreComponentsModule } from './core-components/core-components.module';
import { CoreUiComponentsDemoComponent } from './core-ui-components-demo/core-ui-components-demo.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    WhatsappConnectionComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    SidenavComponent,
    LogoutComponent,
    CoreUiComponentsDemoComponent,
    ChatComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AppMatModule,
    FormsModule,
    CoreComponentsModule
  ],
  providers: [SocketService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
