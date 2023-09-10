import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean = true;
  toggleSidebar:boolean=false;

  handleSideBarToggle=()=>{
    this.toggleSidebar =  !this.toggleSidebar;
    console.log("toggle", this.toggleSidebar);
  }
}
