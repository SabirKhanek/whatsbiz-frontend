import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/student_clearance/services/auth.service';

const Menus = [
  { icon: 'clear_all', title: 'Clearance', url: '/dashboard/clearance-applications'},
  { icon: 'leaderboard', title: 'Student And Staff Search', url: '/dashboard/search'},
  { icon: 'assignment_add', title: 'Students', url: '#'},
  { icon: 'settings', title: 'Settings', url: '#'},
  { icon: 'settings', title: 'Settings', url: '#'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})



export class SidebarComponent implements OnInit {
  bgColor: string = '#170000';
  menus = Menus;
  active: string = 'Clearance';
  super_admin: boolean = sessionStorage.getItem('adminId') === '123';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  setActive(title: string): void {
    this.active = title;
  }

  handleLogout() {
    this.authService.authLogout();
    this.router.navigate(['']);
  }
}
