import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitteComponent } from './pages/committe/committe.component';
import { LayoutComponent } from './layout.component';

import { RouterModule } from '@angular/router';
import { CommitteConstitutionRoutingModule } from './committe-constitution-routing.module';
import { AddRemoveComponent } from './pages/add-remove/add-remove.component';
import { FormsModule } from '@angular/forms';
import { ProcessNewCommitteeFormationComponent } from './pages/process-new-committee-formation/process-new-committee-formation.component';
import { ScheduleMeetingComponent } from './pages/schedule-meeting/schedule-meeting.component';

import { ChangesNewCommitteComponent } from './pages/changes-new-committe/changes-new-committe.component';
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';
import { ApprovedMeetingComponent } from './pages/approved-meeting/approved-meeting.component';
import { ApproveViewCommitteesComponent } from './pages/approve-view-committees/approve-view-committees.component';
import { ViewCommitteComponent } from './pages/view-committe/view-committe.component';
import { ApproveMinutesTaskComponent } from './pages/approve-minutes-task/approve-minutes-task.component';
import { ChangeMinutesTaskComponent } from './pages/change-minutes-task/change-minutes-task.component';
import { RecordMinutesTaskComponent } from './pages/record-minutes-task/record-minutes-task.component';
import { ProcessCommitteMeetingComponent } from './pages/process-committe-meeting/process-committe-meeting.component';
import { DataServiceService } from './services/data-service.service';
import { ChangesMeetingComponent } from './changes-meeting/changes-meeting.component';
import { ProcessChangesCommitteeComponent } from './pages/process-changes-committee/process-changes-committee.component';




@NgModule({
  declarations: [
    CommitteComponent,
    LayoutComponent,
    AddRemoveComponent,
    ProcessNewCommitteeFormationComponent,
    ScheduleMeetingComponent,
    ChangesNewCommitteComponent,
    ApprovedMeetingComponent,
    ApproveViewCommitteesComponent,
    ViewCommitteComponent,
    ApproveMinutesTaskComponent,
    ChangeMinutesTaskComponent,
    RecordMinutesTaskComponent,
    ProcessCommitteMeetingComponent,
    ChangesMeetingComponent,
    ProcessChangesCommitteeComponent
  
  ],
  imports: [
    CommonModule,RouterModule, CommitteConstitutionRoutingModule,TailwindDirectivesModule,FormsModule
  ],
  providers: [DataServiceService]
})
export class CommitteConstitutionModule { }
