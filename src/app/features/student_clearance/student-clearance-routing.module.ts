import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClearnaceApplicationsComponent } from './components/clearnace-applications/clearnace-applications.component';
import { ClearanceDashboardComponent } from './pages/clearance-dashboard/clearance-dashboard.component';
import { StudentClearanceProcessComponent } from './pages/student-clearance-process/student-clearance-process.component';
import { ViewClearanceComponent } from './pages/view-clearance/view-clearance.component';

const routes: Routes = [
  // New Clearance Route
  {
    path: 'clearances',
    component: ClearnaceApplicationsComponent,
    // canActivate: [AuthGuard],
  },
  // Clearance Dashboard Route
  {
    path: 'clearance-dashboard',
    component: ClearanceDashboardComponent,
  },

  // student clearance process route
  {
    path: 'clearance-process',
    component: StudentClearanceProcessComponent,
  },

  // clearance view route
  {
    path: 'view',
    component: ViewClearanceComponent
  },

  // Default Route
  // always use this in last
  {
    path: '**',
    component: ClearnaceApplicationsComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentClearanceRoutingModule {}
