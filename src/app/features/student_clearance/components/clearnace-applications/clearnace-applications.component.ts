import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/features/student_clearance/services/admin.service';
import { ClearanceConfirmDialogComponent } from './clearance-confirm-dialog/clearance-confirm-dialog.component';
import { StudentSearchComponent } from 'shared/components/student-search/student-search.component';


// const APPLICATIONS = [
//   {student_id: '0333-BSCS-20', clearance_type: 'department',apply_date: 'march 23, 2023', status: 'approve'},
//   {student_id: '0323-BSCS-20', clearance_type: 'department',apply_date: 'march 23, 2023', status: 'pending'},
// ]

@Component({
  selector: 'app-clearnace-applications',
  templateUrl: './clearnace-applications.component.html',
  styleUrls: ['./clearnace-applications.component.css']
})
export class ClearnaceApplicationsComponent {


  constructor(private toastr: ToastrService, private route: ActivatedRoute, private adminService: AdminService, public dialog: MatDialog) { }

  clearanceType: string = '';
  selection_scope: string = 'multiple'
  students = []


  openDialog() {
    this.dialog.open(StudentSearchComponent, { data: { selection_scope: this.selection_scope, selection_domain: 'student' } }).afterClosed().subscribe((res) => {
      this.students = res;
    })
  }

}





