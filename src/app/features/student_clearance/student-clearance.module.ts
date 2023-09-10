import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentClearanceRoutingModule } from './student-clearance-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NgForm, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { ClearanceDashboardComponent } from './pages/clearance-dashboard/clearance-dashboard.component';
import { ViewByDepartmentComponent } from './components/view-by-department/view-by-department.component';
import { StudentClearanceProcessComponent } from './pages/student-clearance-process/student-clearance-process.component';
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';
import { ViewClearanceComponent } from './pages/view-clearance/view-clearance.component';
import { ClearnaceApplicationsComponent } from './components/clearnace-applications/clearnace-applications.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    ClearanceDashboardComponent,
    ViewByDepartmentComponent,
    StudentClearanceProcessComponent,
    ViewClearanceComponent,
    ClearnaceApplicationsComponent,
  ],
  imports: [
    CommonModule,StudentClearanceRoutingModule,RouterModule,TailwindDirectivesModule,
    FormsModule,
  
  ]
})
export class StudentClearanceModule { }
