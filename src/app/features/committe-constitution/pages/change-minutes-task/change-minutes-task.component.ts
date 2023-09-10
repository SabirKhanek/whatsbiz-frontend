import { Component } from '@angular/core';

@Component({
  selector: 'app-change-minutes-task',
  templateUrl: './change-minutes-task.component.html',
  styleUrls: ['./change-minutes-task.component.css']
})
export class ChangeMinutesTaskComponent {

  selectedDate: string = 'mm/dd/yyyy';
  assignedBy: string = 'Haider Ali';
}
