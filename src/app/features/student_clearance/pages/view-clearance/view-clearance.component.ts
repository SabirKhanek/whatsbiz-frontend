import { Component } from '@angular/core';

@Component({
  selector: 'app-view-clearance',
  templateUrl: './view-clearance.component.html',
  styleUrls: ['./view-clearance.component.css']
})
export class ViewClearanceComponent {
  modal: boolean = false;

  // handel modal of view by department
  modalHandle() {
    this.modal = !this.modal;
  }
}
