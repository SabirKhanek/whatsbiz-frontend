import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SharedService } from '../shared-services/SharedService';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 
  @Output() toggleevent = new EventEmitter<void>();

  toggle: boolean;
  YourWork: boolean=false;
  constructor(private SharedService: SharedService) {
    this.toggle = this.SharedService.getToggle();
    
  }
  title= "STUDENT PORTAL";

  RouteToToHome = ()=>{

  }

  toggleYourWork(){
    this.YourWork = !this.YourWork;
  }

  onToggleClick() {
   this.SharedService.setToggle(!this.SharedService.getToggle());
   this.SharedService.setClickedByNavbar(true);
  }
}
