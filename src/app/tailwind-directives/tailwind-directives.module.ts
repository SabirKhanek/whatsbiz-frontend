import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRegularDirective, ButtonSmallDirective, ButtonLargeDirective } from './buttonDirectives';
import { ShowupComponent } from './showup/showup.component';
import { InputLargeDirective, InputRegularDirective, InputSmallDirective, RadioRegularDirective, SelectRegularDirective, SelectRegularDropdownDirective } from './inputDirectives';
import { LabelRegularDirective, LabelSmallDirective, labelLargeDirective } from './labelDirectives';
import { LinkLargeDirective, LinkRegularDirective, LinkSmallDirective } from './linkDirectives';
import { DataRegularDirective, DataSmallDirective, dataLargeDirective } from './dataDirectives';
import { highlightedlabelSmall } from './classes';
import { HighlightedLabelRegularDirective, HighlightedLabelSmallDirective, HighlightedlabelLargeDirective } from './highlightedLabelDirectives';
import { TableCellDirective, TableClickableCellDirective, TableHeaderDirective } from './tableDirectives';
import { HighlightedTabDirective, TabDirective } from './tabsDirectives';



@NgModule({
  declarations: [ButtonRegularDirective, ButtonSmallDirective, ButtonLargeDirective,
     ShowupComponent
       , InputLargeDirective, InputSmallDirective, InputRegularDirective,RadioRegularDirective,SelectRegularDirective, SelectRegularDropdownDirective,
       LabelRegularDirective, LabelSmallDirective,labelLargeDirective,
       LinkLargeDirective, LinkRegularDirective, LinkSmallDirective,
       dataLargeDirective, DataSmallDirective, DataRegularDirective,
       HighlightedLabelRegularDirective, HighlightedLabelSmallDirective, HighlightedlabelLargeDirective,
      TableCellDirective, TableHeaderDirective, TableClickableCellDirective, TabDirective, HighlightedTabDirective
       

  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonRegularDirective, ButtonSmallDirective, ButtonLargeDirective,
    ShowupComponent
      , InputLargeDirective, InputSmallDirective, InputRegularDirective,RadioRegularDirective,SelectRegularDirective, SelectRegularDropdownDirective,
      LabelRegularDirective, LabelSmallDirective,labelLargeDirective,
      LinkLargeDirective, LinkRegularDirective, LinkSmallDirective,
      dataLargeDirective, DataSmallDirective, DataRegularDirective,
      HighlightedLabelRegularDirective, HighlightedLabelSmallDirective, HighlightedlabelLargeDirective,
     TableCellDirective, TableHeaderDirective, TableClickableCellDirective, TabDirective, HighlightedTabDirective,]
})
export class TailwindDirectivesModule { }
