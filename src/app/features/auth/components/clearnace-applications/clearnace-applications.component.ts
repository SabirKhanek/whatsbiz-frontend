import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AdminService } from 'src/app/student_clearance/services/admin.service';
import { ClearanceConfirmDialogComponent } from './clearance-confirm-dialog/clearance-confirm-dialog.component';


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

  constructor (private toastr: ToastrService, private route: ActivatedRoute, private adminService: AdminService, public dialog: MatDialog) {}


  applications:any;
  status:any = 'Pending';
  isLoading:boolean = false;
  displayedColumns: string[] = ['studentId','clearanceType' ,'applyDate', 'status'];

  ngOnInit(): void {
    this.getClearanceApplications();
  }



  // get all clearance Applications
  getClearanceApplications () {
    this.isLoading = true;
    const employee_id  = sessionStorage.getItem('adminId') != null ? sessionStorage.getItem('adminId') : '';
    // delete this line after configuring server
    // this.applications = APPLICATIONS;
    // -----------------------------
    this.adminService.getApi('/admin/getallclearancedocs', employee_id).subscribe({
      next: res => {
          // uncomment below line when your api is ready
          this.applications = res.data;
          this.isLoading = false;
      },
      error: err => {
        this.toastr.error("Server error, try again!");
        this.isLoading = false;
      }
    })
  }


  // // apply button handler
  // changeClearanceStatus(stat:string) {
  //   // this.isLoading = true;
  //   this.status = stat;
  //   const student = {rollNo: '0405-bscs-20'};
  //   this.adminService.postApi('/applyForClearance', student).subscribe({
  //     next: res => {
  //       if(res.status === 200)
  //       {
  //         this.isLoading = false;
  //         this.toastr.success("Status Updated successully");
  //       }
  //     },
  //     error: err => {
  //       this.isLoading = false;
  //       this.toastr.error("Server not responding!")
  //     }
  //   })
  // }


  // Dialog
  openDialog(status:any, rollno:any): void {
    const dialogRef = this.dialog.open(ClearanceConfirmDialogComponent, {
      data: {status: status, rollno: rollno},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.status);
    });
  }
}





