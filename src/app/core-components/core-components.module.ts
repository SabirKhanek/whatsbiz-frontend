import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryDirective } from './directives/buttons/button-primary.directive';
import { TableComponent } from './table/table.component';
import { TableCustomColumnDirective } from './directives/table/custom-table-column.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ButtonAccentDirective as ButtonAccentDirective } from './directives/buttons/button-accent.directive';
import { InputComponent } from './input/input.component';
import { InputDirective } from './directives/inputs/inputs.directive';
import { InputLabelDirective } from './directives/labels/labels.directive';
import { TablePaginationComponent } from './table/table-pagination/table-pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SelectComponent } from './select/select.component';
import { TableCustomHeadDirective } from './directives/table/custom-table-head.directive';
import { AppMatModule } from '../utils/app-mat/app-mat.module';
import { InputModalComponent } from './input-modal/input-modal.component';
import { ButtonWarnDirective } from './directives/buttons/button-warn.directive';
import { SelectMultipleComponent } from './select-multiple/select-multiple.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { EpochToDatePipe } from './pipes/epoch-to-date/epoch-to-date.pipe';
import { SummaryPipe } from './pipes/summary/summary.pipe';



@NgModule({
  declarations: [
    ButtonPrimaryDirective,
    ButtonAccentDirective,
    ButtonWarnDirective,
    TableComponent,
    TableCustomColumnDirective,
    TableCustomHeadDirective,
    CheckboxComponent,
    InputComponent,
    InputDirective,
    InputLabelDirective,
    TablePaginationComponent,
    DropdownComponent,
    SelectComponent,
    InputModalComponent,
    SelectMultipleComponent,
    ImageUploadComponent,
    EpochToDatePipe,
    SummaryPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMatModule
  ],
  exports: [
    TableComponent,
    ButtonPrimaryDirective,
    ButtonAccentDirective,
    ButtonWarnDirective,
    TableCustomColumnDirective,
    TableCustomHeadDirective,
    CheckboxComponent,
    InputComponent,
    InputDirective,
    InputLabelDirective,
    TablePaginationComponent,
    DropdownComponent,
    SelectComponent,
    InputModalComponent,
    SelectMultipleComponent,
    ImageUploadComponent,
    EpochToDatePipe,
    SummaryPipe
  ]
})
export class CoreComponentsModule { }
