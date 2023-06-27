import { Component, ElementRef, ViewChild } from '@angular/core';
import { data_headers, data } from 'src/app/core-ui-components-demo/data';
import { TableDataHeader } from '../core-components/types/table.types';
import { MatDialog } from '@angular/material/dialog';
import { SendDealInitComponent } from '../send-deal-init/send-deal-init.component';

@Component({
  selector: 'app-core-ui-components-demo',
  templateUrl: './core-ui-components-demo.component.html',
  styleUrls: ['./core-ui-components-demo.component.scss']
})
export class CoreUiComponentsDemoComponent {
  constructor(private dialog: MatDialog) { }
  testInput = 'test'
  data_headers: TableDataHeader[] = data_headers
  data = data
  @ViewChild('dialog') dialogRef!: ElementRef<HTMLDialogElement>;
  isDialogOpen = true
  testInputLog() {
    console.log(this.testInput)
  }

  openDialog() {
    this.dialog.open(SendDealInitComponent, {
      data: {
        "intent": "buy",
        "name": "iphone xr",
        "ram": "4gb",
        "storage": "64gb",
        "color": "black",
        "author": "923412727290"
      }
    }).afterClosed().subscribe(result => {
      console.log('dialog closed')
    })

  }

  closeDialog(dialogRef: HTMLDialogElement) {
    this.isDialogOpen = false
    dialogRef?.close()
  }
}
