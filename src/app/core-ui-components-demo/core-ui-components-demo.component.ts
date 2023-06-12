import { Component } from '@angular/core';
import { data_headers, data } from 'src/app/core-ui-components-demo/data';
import { TableDataHeader } from '../core-components/types/table.types';

@Component({
  selector: 'app-core-ui-components-demo',
  templateUrl: './core-ui-components-demo.component.html',
  styleUrls: ['./core-ui-components-demo.component.scss']
})
export class CoreUiComponentsDemoComponent {
  data_headers: TableDataHeader[] = data_headers
  data = data
}
