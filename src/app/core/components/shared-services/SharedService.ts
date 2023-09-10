import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  toggleSidebar:boolean=false;
  IsClickedByNavbar:boolean=false;

  setToggle(value: boolean) {
    this.toggleSidebar = value;
  }

  getToggle() {
    return this.toggleSidebar;
  }
  setClickedByNavbar(value:boolean){
    this.IsClickedByNavbar=value;
  }
  getClickedByNavbar(){
    return this.IsClickedByNavbar;
  }
}