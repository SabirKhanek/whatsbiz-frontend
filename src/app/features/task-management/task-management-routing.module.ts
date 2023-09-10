import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskFilteringComponent } from './pages/task-filtering/task-filtering.component';
import { AssignedtoYouComponent } from './pages/assignedto-you/assignedto-you.component';
import { CompletedtaskComponent } from './pages/completedtask/completedtask.component';
import { CompletionfeedbackComponent } from './pages/completionfeedback/completionfeedback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
   {
  path: 'tasks',
  component: TasksComponent,
  
}
,
{
  path: 'workingAndcomplete',
  component: TaskFilteringComponent,
  
},
{
  path: 'assignedToYou',
  component: AssignedtoYouComponent,
  
},
{
  path: 'completeTask',
  component: CompletedtaskComponent,
  
},
{
  path: 'feedback',
  component: CompletionfeedbackComponent,
  
},
{
  path: 'dashBoard',
  component: DashboardComponent,
  
},
{
  path: '**',
  component: TasksComponent,
  
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskManagementRoutingModule {}


