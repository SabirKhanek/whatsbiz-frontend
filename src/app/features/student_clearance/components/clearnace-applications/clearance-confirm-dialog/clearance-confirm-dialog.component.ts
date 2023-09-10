import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ClearnaceApplicationsComponent } from '../clearnace-applications.component';
import { AdminService } from 'src/app/features/student_clearance/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';




@Component({
  selector: 'app-clearance-confirm-dialog',
  templateUrl: './clearance-confirm-dialog.component.html',
  styles: [
  ]
})
export class ClearanceConfirmDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<ClearanceConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, public dialog: MatDialog, private adminService: AdminService, private toastr: ToastrService, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
  

  handleConfirm = () => {
    // data object must be of this type
    // data = {
    //   employee_id: '123',
    //   rollno: '372-bscs-20',
    //   status: "approved"
    // }

    const data = this.data;
    data.employee_id = sessionStorage.getItem('adminId');
    this.changeClearanceStatus(data);
    this.dialogRef.close();
  }

  // apply button handler
  changeClearanceStatus(data:string) {
    this.adminService.postApi('/admin/changestatus', data).subscribe({
      next: res => {
        if(res.status === 200)
        {
          this.toastr.success("Status Updated successully");
          this.router.navigate(['/dashboard/clearance-applications'])
        }
      },
      error: err => {
        this.toastr.error("Server not responding!");
    this.router.navigate(['/dashboard/clearance-applications'])
      }
    })
  }


}
