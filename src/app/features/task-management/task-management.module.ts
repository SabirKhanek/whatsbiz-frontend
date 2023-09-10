import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import { RouterModule } from '@angular/router';
import { TaskFilteringComponent } from './pages/task-filtering/task-filtering.component';
import { TaskModalComponent } from './pages/task-modal/task-modal.component';
import { AssignedtoYouComponent } from './pages/assignedto-you/assignedto-you.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CompletedtaskComponent } from './pages/completedtask/completedtask.component';
import { CompletionfeedbackComponent } from './pages/completionfeedback/completionfeedback.component';
import {MatIconModule} from '@angular/material/icon'
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskFilteringComponent,
    TaskModalComponent,
    AssignedtoYouComponent,
    CompletedtaskComponent,
    CompletionfeedbackComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,TaskManagementRoutingModule,RouterModule
    ,MatTabsModule,MatIconModule,TailwindDirectivesModule
  ]
})
export class TaskManagementModule { }
