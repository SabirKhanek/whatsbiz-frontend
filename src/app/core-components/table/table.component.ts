import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TableCustomColumnDirective } from '../directives/table/custom-table-column.directive';
import { TableDataHeader } from '../types/table.types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit {
  @Input('dataHeadersDef') table_headers: TableDataHeader[] = [];
  @Input('dataSource') data: any = [];
  @Input('autoWidth') autoWidth = true;
  customColumnTemplates: { [key: string]: typeof TemplateRef };
  constructor() { }

  // Load Custom TemplateRefs
  @ContentChildren(TableCustomColumnDirective) headerTemplates: QueryList<TableCustomColumnDirective>;

  ngAfterContentInit() {
    const templatesMap: any = {}
    const customColumnTemplateDirectives = this.headerTemplates.toArray();
    customColumnTemplateDirectives.forEach((templateDirective) => {
      templatesMap[templateDirective.columnName] = templateDirective.template
    })
    this.customColumnTemplates = templatesMap
  }

  getPropFromObj(obj: any, prop: any) {
    return obj[prop]
  }
}
