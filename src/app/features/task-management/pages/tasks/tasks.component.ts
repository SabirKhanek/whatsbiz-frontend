import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StaffSearchComponent } from 'shared/components/staff-search/staff-search.component';
import { Student } from 'shared/types/student';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  selection_scope = 'single';
  // constructor
  constructor(private dialog: MatDialog) {

  }

  student: any = null;

  // New Aattachment
  selectedFile: File | null = new File(["Default File"], "default-file.txt");
  handleFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const fileList = inputElement.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }
  // Tabs
  activeTab: string = 'tab1';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // staffAndSearch Dialog
  openDialog() {
    this.dialog.open(StaffSearchComponent, { data: { selection_scope: this.selection_scope } }).afterClosed().subscribe({
      next: (res: Student) => {
        this.student = res.student_name
      }
    });
  }

  // date calender Css
  isDateSelected: boolean = false;
  onDateSelected(): void {
    this.isDateSelected = true;
  }


}
