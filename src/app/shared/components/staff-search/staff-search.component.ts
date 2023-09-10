import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { Employee } from 'shared/types/staff';
import { StudentService } from 'shared/services/student/student.service';
import { StaffService } from 'shared/services/staff/staff.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student-staff-search',
  templateUrl: './staff-search.component.html',
  styleUrls: ['./staff-search.component.css']
})
export class StaffSearchComponent implements AfterViewInit, OnInit {
  isLoading = false;
  ngOnInit() {
    this.getStaff()
  }

  staffData: Employee[] = []
  data_headers = [
    { 'columnId': 'select', 'columnAlias': 'Select' },
    { 'columnId': 'employee_id', 'columnAlias': 'ID' },
    { 'columnId': 'employee_name', 'columnAlias': 'Name' },
    { 'columnId': 'department', 'columnAlias': 'Department' },
    { 'columnId': 'employee_titles', 'columnAlias': 'Titles' },
    { 'columnId': 'additional_charges', 'columnAlias': 'Additional Charges' },
    // { 'columnId': 'service_domain', 'columnAlias': 'Service Domain' },
    { 'columnId': 'employee_committees', 'columnAlias': 'Committees' }
  ]
  staff_selections: SelectionModel<Employee>

  // STAFF SPECIFIC QUERY PARAMS
  search_query: string = ''
  isTeaching: boolean = true
  isAdministrative: boolean = true

  remove(row: Employee) {
    this.staff_selections.toggle(row)
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.staff_selections.selected.length;
    const numRows = this.staffData.length;
    return numSelected == numRows;
  }

  allowMultiSelect = true;

  toggleAllStaffRows() {
    this.isAllSelected() ?
      this.staff_selections.clear() :
      this.staffData.forEach(row => this.staff_selections.select(row));
  }

  constructor(private dialogRef: MatDialogRef<StaffSearchComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService, private staffService: StaffService) {
    // Dialog Modal size
    dialogRef.addPanelClass(['md:w-3/5', 'w-full'])
    dialogRef.updateSize('960px', '90vh')

    this.allowMultiSelect = data.selection_scope == 'single' ? false : true
    this.staff_selections = new SelectionModel<Employee>(this.allowMultiSelect, []);
  }

  ngAfterViewInit() {

  }

  getStaff() {
    this.isLoading = true;
    const serviceDomainFilter = (this.isAdministrative === this.isTeaching) ? undefined : (this.isAdministrative ? 'administrative' : 'teaching');

    const filters: { name?: string, service_type?: 'administrative' | 'teaching' } = {}
    if (serviceDomainFilter) {
      filters.service_type = serviceDomainFilter
    }

    if (this.search_query && this.search_query.length > 0) {
      filters.name = this.search_query
    }
    this.staffService.getStaff(filters).subscribe({
      next: (res) => {
        this.staffData = res.data
        if (this.staffData.length === 0) this.toastr.info('No results found')
        this.isLoading = false;
      }, error: (err) => {
        this.toastr.error('Error communicating the server', 'Error')
        this.isLoading = false;
      }
    })
  }

  staffFilterChange() {
    this.getStaff()
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

  public getDynamicProperty(obj: any, property: string): any {
    return obj[property];
  }

}
