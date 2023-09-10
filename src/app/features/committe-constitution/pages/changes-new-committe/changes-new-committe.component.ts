import { Component, Input } from '@angular/core';
import { ProcessNewCommitteeFormationComponent } from '../process-new-committee-formation/process-new-committee-formation.component';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-changes-new-committe',
  templateUrl: './changes-new-committe.component.html',
  styleUrls: ['./changes-new-committe.component.css']
})
export class ChangesNewCommitteComponent {
  // @Input() instruction :any;
  name = '';
  purpose = '';
  Notes = '';
  check = false;
  sharedData = {
    'name': '',
    'purpose': '',
    'scope': '',
    'secretary': '',
    'convenor': '',
    'members': '',
  };
  defaultSharedData = {
    'name': '',
    'purpose': '',
    'scope': '',
    'secretary': '',
    'convenor': '',
    'members': '',
  }
  sharedApproveData = {

  };
  constructor(private dataService: DataServiceService) {
    this.sharedData = this.dataService.getSharedData();
    console.log(this.sharedData)
    this.name = this.sharedData?.name
    this.purpose = this.sharedData?.purpose
    this.sharedApproveData = this.dataService.getApproveData();
  }

}



