import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isDropdownOpen: boolean = false;
  selectedOption: string = ''; // Track the selected option

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option; // Update the selected option
    this.isDropdownOpen = false; // Close the dropdown
  }

}
