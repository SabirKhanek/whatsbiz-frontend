import { Component } from '@angular/core';

@Component({
  selector: 'app-task-filtering',
  templateUrl: './task-filtering.component.html',
  styleUrls: ['./task-filtering.component.css']
})
export class TaskFilteringComponent {
  
  assignedFile: File | null = new File(["Default File"], "default-file.txt");
  handleFileAssigned(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const fileList = inputElement.files;
    if (fileList && fileList.length > 0) {
      this.assignedFile = fileList[0];
    }
  }
  
  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

}
