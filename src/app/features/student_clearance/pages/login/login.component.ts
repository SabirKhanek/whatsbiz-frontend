import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/student_clearance/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService,
    private toastr: ToastrService
  ) {}

  loginForm = this.builder.group({
    employee_id: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
    password: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
  });

  proceedLogin() {
    this.router.navigate(['/dashboard/clearance-applications']);
    if (this.loginForm.valid) {
      this.isLoading = true;
           // -------------------------------------------
      this.service.adminLogin(this.loginForm.value).subscribe({
        next: (res) => {
      sessionStorage.setItem('adminId', res.data.admin.id)
      sessionStorage.setItem('authToken', res.authToken);
      
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
      // this.router.navigate(['']);
          this.toastr.error(
            'Please try again with valid username and password.'
          )},
      });
    } else {
      this.toastr.error('Please enter valid credentials!');
    }
  }

}
