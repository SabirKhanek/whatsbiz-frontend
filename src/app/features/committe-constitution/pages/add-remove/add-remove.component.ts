import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StaffSearchComponent } from 'shared/components/staff-search/staff-search.component';


interface Member {
  name: string;
  internal: string;
  email: string;
  phone: string;
  memberSince: string;
  status: string;
}

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent {
  constructor(private dialog: MatDialog) { }

  name: string = 'husnain';
  members: Member[] = [
    {
      name: 'Husnain',
      internal: 'Internal',
      email: 'husnain@example.com',
      phone: '555-1234',
      memberSince: '12-02-2020',
      status: 'Active'
    },
    {
      name: 'Tayyab Sharif',
      internal: 'External',
      email: 'tayyab@example.com',
      phone: '555-5678',
      memberSince: '12-02-2020',
      status: 'Inactive'
    },

    {
      name: 'Ahsan Munir',
      internal: 'Internal',
      email: 'bob@example.com',
      phone: '555-9012',
      memberSince: '12-02-2020',
      status: 'Active'
    },
  ];
  add(member: Member) {
    console.log(`Adding member ${member.name}`);
  }

  remove(member: Member) {
    console.log(`Removing member ${member.name}`);
  }

  AddMember(): void {
    this.dialog.open(StaffSearchComponent, {
      data: { selection_domain: 'staff', selection_scope: 'multiple' }
    }).afterClosed().subscribe(result => {
      if (result === undefined || result.length <= 0) return
      // Perform any operation with the result (array of selected students or staff)
      console.log(result)
    })
  }
}



