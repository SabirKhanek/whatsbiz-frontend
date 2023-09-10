import { Component } from '@angular/core';

@Component({
  selector: 'app-clearance-dashboard',
  templateUrl: './clearance-dashboard.component.html',
  styleUrls: ['./clearance-dashboard.component.css'],
})
export class ClearanceDashboardComponent {
  modal: boolean = false;

  // handel modal of view by department
  modalHandle() {
    this.modal = !this.modal;
  }
}
