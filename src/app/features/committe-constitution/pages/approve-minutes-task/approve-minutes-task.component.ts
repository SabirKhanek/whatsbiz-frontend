import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
@Component({
  selector: 'app-approve-minutes-task',
  templateUrl: './approve-minutes-task.component.html',
  styleUrls: ['./approve-minutes-task.component.css']
})
export class ApproveMinutesTaskComponent {
  constructor(private dataService: DataServiceService, private dataAppService: DataServiceService) {

  }
  selectedDate: string = 'mm/dd/yyyy';
  assignedBy: string = 'Husnain';
  popupfor = '';
  popupInput = '';

  public instructions: any = {
    'name': '',
    'purpose': '',
    'scope': '',
    'secretary': '',
    'convenor': '',
    'members': '',
  }


  showPopUp(inp = 'default') {
    const popup = document.getElementById('popup');
    this.popupfor = inp;
    popup?.classList.remove('hidden')
    console.log(inp);
    document.getElementById('Instruction')?.focus()
  }



  closePopUp() {
    const popup = document.getElementById('popup');
    popup?.classList.add('hidden')
    this.popupfor = ''
    this.popupInput = ''
  }
  // For giving the colors to radio lable
  public selectedOption = {
    'name': '',
    'purpose': '',
    'scope': '',
    'secretary': '',
    'convenor': '',
    'members': '',
  }

  updateData() {
    this.instructions[this.popupfor] = this.popupInput;
    this.dataService.setSharedData(this.instructions);
  }

}
