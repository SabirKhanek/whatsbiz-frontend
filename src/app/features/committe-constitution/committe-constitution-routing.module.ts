import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CommitteComponent } from './pages/committe/committe.component';
import { AddRemoveComponent } from './pages/add-remove/add-remove.component';
import { ProcessNewCommitteeFormationComponent } from './pages/process-new-committee-formation/process-new-committee-formation.component';
import { ScheduleMeetingComponent } from './pages/schedule-meeting/schedule-meeting.component';
import { ChangesNewCommitteComponent } from './pages/changes-new-committe/changes-new-committe.component';
import { ProcessCommitteMeetingComponent } from './pages/process-committe-meeting/process-committe-meeting.component';
import { ApprovedMeetingComponent } from './pages/approved-meeting/approved-meeting.component';
import { ApproveViewCommitteesComponent } from './pages/approve-view-committees/approve-view-committees.component';
import { ViewCommitteComponent } from './pages/view-committe/view-committe.component';
import { RecordMinutesTaskComponent } from './pages/record-minutes-task/record-minutes-task.component';
import { ApproveMinutesTaskComponent } from './pages/approve-minutes-task/approve-minutes-task.component';
import { ChangeMinutesTaskComponent } from './pages/change-minutes-task/change-minutes-task.component';
// import { HomeComponent } from '../auth/pages/home/home.component';
import { UserHomeComponent } from 'src/app/core/components/user-home/user-home.component';
import { ChangesMeetingComponent } from './changes-meeting/changes-meeting.component';
import { ProcessChangesCommitteeComponent } from './pages/process-changes-committee/process-changes-committee.component';


const routes: Routes = [
   {
  path: 'new-committee',
  component: CommitteComponent,
  
},
{
  path: 'changes-newCommitte',
  component: ChangesNewCommitteComponent,
  
},
{
  path: 'committee-formation',
  component: ProcessNewCommitteeFormationComponent,
  
},
{
  path: 'add-remove',
  component: AddRemoveComponent,
  
},
{
  path: 'scheduled-meeting',
  component:ScheduleMeetingComponent,
  
},
{
  path: 'process-meeting',
  component:ProcessCommitteMeetingComponent
  
},

{
  path: 'approve-view-committees',
  component:ApproveViewCommitteesComponent
  
},
{
  path: 'commitee-changes',
  component:ProcessChangesCommitteeComponent
  
},

{
  path: 'approved-meeting',
  component:ApprovedMeetingComponent
  
},
{
  path: 'view-committe',
  component:ViewCommitteComponent
  
},
{
  path: 'changes-meeting',
  component:ChangesMeetingComponent
  
},
{
  path: 'record-minutes-task',
  component:RecordMinutesTaskComponent
  
},
{
  path: 'approve-minutes-task',
  component:ApproveMinutesTaskComponent
  
},
{
  path: 'change-minutes-task',
  component:ChangeMinutesTaskComponent
  
},
{
  path: '**',
  component: LayoutComponent,
  
}

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitteConstitutionRoutingModule { }