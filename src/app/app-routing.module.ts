import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketTestComponent } from './socket-test/socket-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: SocketTestComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
