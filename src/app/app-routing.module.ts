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
import { ProductsComponent } from './products/products.component';
import { WaGroupsComponent } from './features/wa-groups/groups-dashboard/groups.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WaGroupCollectionsComponent } from './features/wa-groups/group-collections-dashboard/group-collections.component';
import { PostAdComponent } from './features/post-ad/dashboard/post-ad.component';

const routes: Routes = [
  {
    path: 'whatsapp-connection',
    component: WhatsappConnectionComponent,
    canActivate: [authGuard]
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
    path: 'post-ad',
    component: PostAdComponent,
    canActivate: [authGuard]
  },
  {
    path: 'wa-group-collections',
    component: WaGroupCollectionsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'core-ui',
    component: CoreUiComponentsDemoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [authGuard]
  }, {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard]
  }, {
    path: '**',
    component: DashboardComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
