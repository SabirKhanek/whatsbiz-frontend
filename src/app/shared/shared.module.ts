import { StaffSearchComponent } from './components/staff-search/staff-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfaPopupComponent } from './components/tfa-popup/tfa-popup.component';
import { AppMatModule } from '../utils/app-mat/app-mat.module';
import { FormsModule } from '@angular/forms';
import { TailwindDirectivesModule } from '../tailwind-directives/tailwind-directives.module';
import { AppTableModule } from '../utils/app-table/table.module';
import { StudentService } from './services/student/student.service';
import { StudentSearchComponent } from './components/student-search/student-search.component';

@NgModule({
  declarations: [
    TfaPopupComponent,
    StaffSearchComponent,
    StudentSearchComponent
  ],
  imports: [
    CommonModule,
    AppMatModule,
    FormsModule,
    TailwindDirectivesModule,
    AppTableModule,
    AppMatModule
  ],
  providers: [StudentService],
  exports: [
    TfaPopupComponent,
    StaffSearchComponent,
    StudentSearchComponent
  ]
})
export class SharedModule { }
