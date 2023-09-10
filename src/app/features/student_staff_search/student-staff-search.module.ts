import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';
import { AppTableModule } from 'src/app/utils/app-table/table.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, TailwindDirectivesModule, AppTableModule
  ]
})
export class StudentStaffSearchModule { }
