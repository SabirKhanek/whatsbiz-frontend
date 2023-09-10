import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/student_clearance/services/auth.service';
import { SharedService } from '../shared-services/SharedService';

const Menus = [
  // { icon: 'clear_all', title: 'Clearance', url: '/dashboard/clearance-applications'},
  { icon: 'leaderboard', title: 'Student And Staff Search', url: '/dashboard/search'},
  { icon: 'settings', title: 'Task Management', url: '/dashboard/task-management'},
  { icon: 'settings', title: 'Committee Constitution', url: '/dashboard/committee-constitution/new-committee'},
  { icon: 'settings', title: 'Fee Discount', url: '/dashboard//auth/discount'},
  { icon: 'settings', title: 'Digital Signature', url: '/dashboard/digital-signature'},
  { icon: 'settings', title: 'Utitity LookUp', url: '/dashboard/showup'},
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
  toggle: boolean;
  super_admin: boolean = sessionStorage.getItem('adminId') === '123';
  constructor(private authService: AuthService, private router: Router,private SharedService: SharedService,
    private elementRef: ElementRef) {

    this.toggle = this.SharedService.getToggle();
  }

  ngOnInit() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
 
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  handleClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(targetElement) ) {
      this.toggle = false;
     !this.SharedService.getClickedByNavbar() && this.SharedService.setToggle(false);
      this.SharedService.setClickedByNavbar(false);
    }
  }
 



  // ngOnInit() {}
  // setActive(title: string): void {
  //   this.active = title;
  // }
  // }

  handleLogout() {
    this.authService.authLogout();
    this.router.navigate(['']);
  
  }


  

  getToggle(){
    return this.SharedService.getToggle();
  }
}
