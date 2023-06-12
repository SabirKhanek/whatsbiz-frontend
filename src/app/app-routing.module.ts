import { CoreUiComponentsDemoComponent } from './core-ui-components-demo/core-ui-components-demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsappConnectionComponent } from './whatsapp-connection/whatsapp-connection';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard, notAuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'whatsapp-connection',
    component: WhatsappConnectionComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [notAuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard]
  },
  {
    path: 'core-ui',
    component: CoreUiComponentsDemoComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
