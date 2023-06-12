import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryDirective } from './directives/buttons/button-primary.directive';
import { TableComponent } from './table/table.component';
import { TableCustomColumnDirective } from './directives/table/custom-table-column.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ButtonAccentDirective as ButtonAccentDirective } from './directives/buttons/button-accent.directive';
import { FloatingInputComponent } from './input/input.component';
import { InputDirective } from './directives/inputs/inputs.directive';
import { InputLabelDirective } from './directives/labels/labels.directive';



@NgModule({
  declarations: [
    ButtonPrimaryDirective,
    ButtonAccentDirective,
    TableComponent,
    TableCustomColumnDirective,
    CheckboxComponent,
    FloatingInputComponent,
    InputDirective,
    InputLabelDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    ButtonPrimaryDirective,
    ButtonAccentDirective,
    TableCustomColumnDirective,
    CheckboxComponent,
    FloatingInputComponent,
    InputDirective,
    InputLabelDirective
  ]
})
export class CoreComponentsModule { }
