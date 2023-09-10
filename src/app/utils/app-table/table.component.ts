import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { TableCustomColumnDirective } from './directives/custom-table-column.directive';
import { TableDataHeader } from './types/table.types';
import { TableCustomHeadDirective } from './directives/custom-table-head.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit, OnChanges {
  @Input('dataHeadersDef') table_headers: TableDataHeader[] = [];
  @Input('dataSource') data: any = [];
  @Input('autoWidth') autoWidth = true;
  @Input('pagination') pagination = false;
  @Input('pageSize') pageSize = 5;
  dataToDisplay: any = [];
  customCellTemplates: { [key: string]: typeof TemplateRef } = {};
  customHeadTemplates: { [key: string]: typeof TemplateRef } = {};
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataToDisplay = this.data;
    }
  }

  // Load Custom TemplateRefs
  @ContentChildren(TableCustomColumnDirective) cellTemplates: QueryList<TableCustomColumnDirective> = new QueryList<TableCustomColumnDirective>();
  @ContentChildren(TableCustomHeadDirective) headerTemplates: QueryList<TableCustomHeadDirective> = new QueryList<TableCustomHeadDirective>();

  ngAfterContentInit() {
    const templatesMap: any = {}
    const customColumnTemplateDirectives = this.cellTemplates.toArray();
    customColumnTemplateDirectives.forEach((templateDirective) => {
      templatesMap[templateDirective.columnName] = templateDirective.template
    })
    this.customCellTemplates = templatesMap

    const headerTemplatesMap: any = {}
    const customHeaderTemplateDirectives = this.headerTemplates.toArray();
    customHeaderTemplateDirectives.forEach((templateDirective) => {
      headerTemplatesMap[templateDirective.headName] = templateDirective.template
    })
    this.customHeadTemplates = headerTemplatesMap
  }

  handlePageChange(data: any) {
    this.dataToDisplay = data
  }

  getPropFromObj(obj: any, prop: any) {
    return obj[prop]
  }
}
