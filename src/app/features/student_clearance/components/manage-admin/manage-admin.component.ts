import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/features/student_clearance/services/admin.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit{

adminsDetail: any;
editAdminDetail: any;
checkoutForm:any = this.formBuilder.group({
  full_name: '',
  email: '',
  empId: '',
  role: '',
  type: '',
})

ngOnInit(): void {
    this.getAllAdmins();

}

constructor (private adminService: AdminService, private toastr: ToastrService, private formBuilder: FormBuilder) {}






getAllAdmins() : void {
  const employee_id = sessionStorage.getItem('adminId');
  this.adminService.getApi('/admin/getalladmins', employee_id).subscribe({
    next: (res) => {
      this.adminsDetail = res.data;
      console.log("response: " +  this.adminsDetail);
    },
    error: () => {
     this.toastr.error("Server error!"); 
    }
  });
}

editAdmin(empId:any) : void {
  this.adminService.postApi('/admin/getadmininfo', empId).subscribe({
    next: res => {  
        this.editAdminDetail = res.data;
        this.setFormValue();
    },
    error: err => {
      this.toastr.error("Select again.")
    }
  })
}


setFormValue() : void {
    this.checkoutForm.setValue({
      full_name: this.editAdminDetail[0].full_name,
      email: this.editAdminDetail[0].email,
      empId: this.editAdminDetail[0].empId,
      role: this.editAdminDetail[0].role,
      type: this.editAdminDetail[0].type
    })
}

updateAdmin(): void {

}

}
