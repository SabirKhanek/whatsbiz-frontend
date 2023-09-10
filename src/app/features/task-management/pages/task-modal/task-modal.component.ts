import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {

  constructor(public dialog: MatDialog){}
  
  // Feedback
  feedback: number = 0; // Initialize the feedback property
  editable: boolean = true; // Set editable to true if the user can change the feedback

  onStarClick(rating: number) {
    if (this.editable) {
      this.feedback = rating; // Update the feedback property based on the clicked star
    }
  }
  

  // Placeholder for date input
  inputType: string = 'text';
  inputTypeA: string = 'text';
  onInputFocus() {
    this.inputType = 'date';
  }

  onInputBlur() {
    this.inputType = 'text';
  }
  onInputFocusF() {
    this.inputTypeA = 'date';
  }

  onInputBlurB() {
    this.inputTypeA = 'text';
  }

  closeDialog(){
    this.dialog.closeAll();
      }
  
}
