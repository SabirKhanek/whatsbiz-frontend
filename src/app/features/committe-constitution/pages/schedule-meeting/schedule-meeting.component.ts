import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent {

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
