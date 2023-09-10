import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../task-modal/task-modal.component';
@Component({
  selector: 'app-assignedto-you',
  templateUrl: './assignedto-you.component.html',
  styleUrls: ['./assignedto-you.component.css']
})
export class AssignedtoYouComponent {

  
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(TaskModalComponent);
  }

  
}
