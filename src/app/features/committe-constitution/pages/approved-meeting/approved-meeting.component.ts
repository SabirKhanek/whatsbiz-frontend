import { Component } from '@angular/core';

@Component({
  selector: 'app-approved-meeting',
  templateUrl: './approved-meeting.component.html',
  styleUrls: ['./approved-meeting.component.css']
})
export class ApprovedMeetingComponent {
  isTextBoxVisible: boolean = false;
  isToggleButtonDisabled: boolean = false;

  toggleTextBox(): void {
    this.isTextBoxVisible = !this.isTextBoxVisible;
    this.isToggleButtonDisabled = true;
  }
  names: string[] = [];
  nameInput: string = '';

  addName(): void {
    if (this.nameInput.trim() !== '') {
      this.names.push(this.nameInput);
      this.nameInput = '';
    }
  }

}
