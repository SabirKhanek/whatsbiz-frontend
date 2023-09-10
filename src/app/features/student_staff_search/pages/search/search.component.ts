import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from 'shared/types/staff';
import { Student } from 'shared/types/student';

import { MatTable } from '@angular/material/table';
import { StaffSearchComponent } from 'shared/components/staff-search/staff-search.component';
import { StudentSearchComponent } from 'shared/components/student-search/student-search.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  selection_results: (Employee & Student)[] = [];
  selection_domain = 'staff';
  selection_scope = 'multiple';
  display_results = false;

  selectedDepartments = []
  departmentsList = [{ "id": "department of computer science", "department": "Department of Computer Science" }, { "id": "department of accounting and finance", "department": "Department of Accounting and Finance" }, { "id": "department of mathematics", "department": "Department of Mathematics" }, { "id": "department of life sciences", "department": "Department of Life Sciences" }, { "id": "department of urdu", "department": "Department of Urdu" }]

  studentData: Student[] = []
  studentHeader = [
    { 'columnId': 'student_id', 'columnAlias': 'ID' },
    { 'columnId': 'student_name', 'columnAlias': 'Name' },
    { 'columnId': 'department', 'columnAlias': 'Department' },
    { 'columnId': 'program', 'columnAlias': 'Program' },
    { 'columnId': 'semester', 'columnAlias': 'Semester' },
  ]
  staffData: Employee[] = []
  staffHeaders = [
    { 'columnId': 'employee_id', 'columnAlias': 'ID' },
    { 'columnId': 'employee_name', 'columnAlias': 'Name' },
    { 'columnId': 'department', 'columnAlias': 'Department' },
    { 'columnId': 'employee_titles', 'columnAlias': 'Titles' },
    { 'columnId': 'additional_charges', 'columnAlias': 'Additional Charges' },
    // { 'columnId': 'service_domain', 'columnAlias': 'Service Domain' },
    { 'columnId': 'employee_committees', 'columnAlias': 'Committees' }
  ]

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    if (this.selection_domain == 'staff') {
      this.dialog.open(StaffSearchComponent, {
        data: { selection_scope: this.selection_scope }
      }).afterClosed().subscribe(result => {
        if (result === undefined || result.length <= 0) return
        console.log(result)
        this.display_results = false;
        this.staffData = result;
        this.display_results = true;
      })
    } else if (this.selection_domain == 'student') {
      this.dialog.open(StudentSearchComponent, {
        data: { selection_scope: this.selection_scope }
      }).afterClosed().subscribe(result => {
        if (result === undefined || result.length <= 0) return
        console.log(result)
        this.display_results = false;
        this.studentData = result;
        this.display_results = true;
      })
    }
  }

  getJson(obj: Object) {
    const formattedJson = JSON.stringify(obj, null, 3);
    return `<pre>${formattedJson}</pre>`;
  }

  getDesignationAtDeptStr(addt_charges: Employee["additional_charges"]) {
    return addt_charges.map(addt_charge => {
      return `${addt_charge.designation_title} at ${addt_charge.department.department_name}`
    }).join(', ')
  }

  getCommitteeNames(committees: Employee["employee_committees"]) {
    return committees.map(committee => {
      return `${committee.employee_role} in ${committee.committee_name}`
    }).join(', ')
  }
}
