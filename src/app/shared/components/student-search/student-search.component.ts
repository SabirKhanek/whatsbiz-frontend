import { DepartmentService } from './../../services/department/department.service';
import { GetStudentFilters } from './../../services/student/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { Student } from 'shared/types/student';
import { StudentService } from 'shared/services/student/student.service';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'shared/types/department';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  isLoading = false;
  studentsData: Student[] = []
  data_headers = [
    { 'columnId': 'select', 'columnAlias': 'Select' },
    { 'columnId': 'student_id', 'columnAlias': 'ID' },
    { 'columnId': 'student_name', 'columnAlias': 'Name' },
    { 'columnId': 'department', 'columnAlias': 'Department' },
    { 'columnId': 'program', 'columnAlias': 'Program' },
    { 'columnId': 'semester', 'columnAlias': 'Semester' },
  ]

  defaultDepartment: Department = { department_id: -1, department_name: 'All Departments' }
  department_range: Department[] = [this.defaultDepartment];

  // Student Specific Query Params
  available_programs_filters: ('Bachelor' | 'Master' | 'MPhil' | 'PhD')[] = ['Bachelor', 'Master', 'PhD', 'MPhil']
  available_semester_filters: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  student_search_query: string = ''
  student_program_applied_filters = new SelectionModel<('Bachelor' | 'Master' | 'MPhil' | 'PhD')>(true, []);
  student_semester_applied_filters = new SelectionModel<number>(true, []);
  department_filter: number = -1

  // Selection
  initialSelection = [];
  allowMultiSelect;
  student_selections: SelectionModel<Student>;

  remove(row: Student) {
    this.student_selections.toggle(row)
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.student_selections.selected.length;
    const numRows = this.studentsData.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected() ?
      this.student_selections.clear() :
      this.studentsData.forEach(row => this.student_selections.select(row));
  }

  constructor(private dialogRef: MatDialogRef<StudentSearchComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService, private toastr: ToastrService, private deptService: DepartmentService) {
    // Dialog Modal size
    dialogRef.addPanelClass(['md:w-3/5', 'w-full'])
    dialogRef.updateSize('960px', '90vh')
    // Set department range

    this.allowMultiSelect = data.selection_scope == 'single' ? false : true
    this.student_selections = new SelectionModel<Student>(this.allowMultiSelect, []);
  }

  ngOnInit() {
    this.getStudentData()
    if (this.data.departmentsList !== undefined && this.data.departmentsList.length > 0) {
      this.department_range.push(...this.data.departmentsList)
      if (this.data.departmentsList.length <= 1) {
        this.department_filter = this.data.departmentsList[0].department_name
      }
    } else {
      console.log('Hi')
      this.getDepartmentListFromServer()
    }
  }

  getStudentData() {
    this.isLoading = true
    const department = this.department_filter !== -1 ? this.department_filter : undefined
    const filterObj: GetStudentFilters = {
      programs: this.student_program_applied_filters.selected,
      name_roll: this.student_search_query,
      semesters: this.student_semester_applied_filters.selected,
      department: department
    }
    this.studentService.getStudents(filterObj).subscribe({
      next: (students) => {
        this.studentsData = students.data
        if (this.studentsData.length === 0) this.toastr.info('No results found')
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error('Error fetching student data from the server.', 'Error')
        console.error(err)
        this.isLoading = false;
      }
    })
  }

  getDepartmentListFromServer() {
    this.deptService.getDepartments().subscribe({
      next: (res) => {
        const academicDepts = res.data.filter(dept => dept.department_type === 'academic')
        this.department_range = [this.defaultDepartment, ...academicDepts]
      },
      error: (err) => {
        this.toastr.error('Error fetching departments list from the server', 'Error')
      }
    })
  }

  onStudentQueryChange() {
    this.getStudentData()
  }

  public getDynamicProperty(obj: any, property: string): any {
    return obj[property];
  }
}

