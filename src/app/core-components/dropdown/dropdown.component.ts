import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() buttonText: string;
  @Input() dropdownItems: DropdownItem[];
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}

interface DropdownItem {
  id: number;
  text: string;
}