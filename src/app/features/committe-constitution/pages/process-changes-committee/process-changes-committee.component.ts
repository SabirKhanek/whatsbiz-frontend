import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-process-changes-committee',
  templateUrl: './process-changes-committee.component.html',
  styleUrls: ['./process-changes-committee.component.css']
})
export class ProcessChangesCommitteeComponent {
  constructor(private dataService: DataServiceService, private dataAppService: DataServiceService) {

  }
  public name = '';
  public purpose = '';
  public Notes = '';
  public approve: any = 'false';

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

  sharedData: any;

  updateData() {
    this.instructions[this.popupfor] = this.popupInput;
    this.dataService.setSharedData(this.instructions);
  }

  updateDataApprove() {
    const newData2 = this.approve;
    this.dataAppService.setApproveData(newData2);

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

}
