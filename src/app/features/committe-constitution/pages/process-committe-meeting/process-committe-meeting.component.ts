import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
@Component({
  selector: 'app-process-committe-meeting',
  templateUrl: './process-committe-meeting.component.html',
  styleUrls: ['./process-committe-meeting.component.css']
})
export class ProcessCommitteMeetingComponent {

  constructor(private dataService: DataServiceService) {
  }
  name = '';
  purpose = '';
  Notes = '';
  instruction = '';
  
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

  // textcolor(){
  //   this.textcolor();
  // }
  showPopUp(inp = 'default') {
    const popup = document.getElementById('popup');
    this.popupfor = inp;
    popup?.classList.remove('hidden')
    console.log(inp);
    document.getElementById('Instruction')?.focus()
  }

  updateData() {
    this.instructions[this.popupfor] = this.popupInput;
    this.dataService.setSharedData(this.instructions);
  }

  closePopUp() {
    const popup = document.getElementById('popup');
    popup?.classList.add('hidden')
    this.popupfor = ''
    this.popupInput = ''
  }
  public selectedOption = {
    'name': '',
    'purpose': '',
    'scope': '',
    'secretary': '',
    'convenor': '',
    'members': '',
  }
}
