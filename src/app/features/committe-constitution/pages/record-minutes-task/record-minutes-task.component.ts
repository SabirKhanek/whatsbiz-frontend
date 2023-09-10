import { Component } from '@angular/core';

@Component({
  selector: 'app-record-minutes-task',
  templateUrl: './record-minutes-task.component.html',
  styleUrls: ['./record-minutes-task.component.css']
})
export class RecordMinutesTaskComponent {

  selectedDate: string = 'mm/dd/yyyy';
  assignedBy: string = 'Dr. Ali';

}
