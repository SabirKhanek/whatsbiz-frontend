import { Component } from '@angular/core';

@Component({
  selector: 'app-completionfeedback',
  templateUrl: './completionfeedback.component.html',
  styleUrls: ['./completionfeedback.component.css']
})
export class CompletionfeedbackComponent {
  // Feedback
  feedback: number = 0; // Initialize the feedback property
  editable: boolean = true; // Set editable to true if the user can change the feedback

  onStarClick(rating: number) {
    if (this.editable) {
      this.feedback = rating; // Update the feedback property based on the clicked star
    }
  }
  
}
