import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/student_clearance/services/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {


  checkoutForm = this.formBuilder.group({
    full_name: '',
    email: '',
    employee_id: '',
    type: '',
    admin_role: '' ,
    password:''
  });

  constructor(private adminService: AdminService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {}



  createAdminHandler(): void  {

    this.adminService.postApi('/admin/createadmin', this.checkoutForm.value).subscribe({
      next: (res) => {
        this.toastr.success("Admin created successfully.");
        this.checkoutForm.reset();
        this.router.navigate(['/dashboard/manage-admins']);
      },
      error: (error) => {
        console.log("error", error);
        this.toastr.error("Server Error!");
      }
    });
    
  }

 
}
