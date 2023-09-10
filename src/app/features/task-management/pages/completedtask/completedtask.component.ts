import { Component } from '@angular/core';

@Component({
  selector: 'app-completedtask',
  templateUrl: './completedtask.component.html',
  styleUrls: ['./completedtask.component.css']
})
export class CompletedtaskComponent {
  assignedFile: File;

  constructor() {
    // Inside the constructor, initialize the assignedFile property
    const fileData = "This is the content of the file.";
    const blob = new Blob([fileData], { type: "text/plain" });
    this.assignedFile = new File([blob], "MyNotesFile.txt");
  }

  feedback: number = 3;
  editable: boolean = false;

  onStarClick(rating: number) {
    if (this.editable) {
      this.feedback = rating;
    }
  }

   
  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
