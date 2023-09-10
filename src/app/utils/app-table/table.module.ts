import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableCustomColumnDirective } from './directives/custom-table-column.directive';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TailwindDirectivesModule } from 'src/app/tailwind-directives/tailwind-directives.module';
import { TableCustomHeadDirective } from './directives/custom-table-head.directive';

@NgModule({
    declarations: [
        TableComponent,
        TableCustomColumnDirective,
        TablePaginationComponent,
        TableCustomHeadDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        TailwindDirectivesModule,
    ],
    providers: [],
    exports: [
        TableComponent,
        TableCustomColumnDirective,
        TablePaginationComponent,
        TableCustomHeadDirective
    ],
})
export class AppTableModule { }