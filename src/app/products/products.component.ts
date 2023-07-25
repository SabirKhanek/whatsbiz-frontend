import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/products.service';
import { SendDealInitComponent } from '../send-deal-init/send-deal-init.component';
import { Product } from '../types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    this.handleProductRequest();
  }

  data: any = []
  data_headers = [
    { 'columnId': 'intent', 'columnAlias': 'Intent' },
    { 'columnId': 'name', 'columnAlias': 'Name' },
    // { 'columnId': 'type', 'columnAlias': 'Type' },
    // { 'columnId': 'brand', 'columnAlias': 'Brand' },
    { 'columnId': 'quantity', 'columnAlias': 'Quantity' },
    { 'columnId': 'condition', 'columnAlias': 'Condition' },
    { 'columnId': 'price', 'columnAlias': 'Price' },
    // { 'columnId': 'Remarks', 'columnAlias': 'Remarks' },
    { 'columnId': 'ram', 'columnAlias': 'RAM' },
    { 'columnId': 'color', 'columnAlias': 'Color' },
    // { 'columnId': 'storage', 'columnAlias': 'Storage' },
    // { 'columnId': 'processor', 'columnAlias': 'Processor' },
    { 'columnId': 'chatName', 'columnAlias': 'Chat Name' },
    { 'columnId': 'message', 'columnAlias': 'Message' },
    { 'columnId': 'author', 'columnAlias': 'Author' },
    { 'columnId': 'messagetime', 'columnAlias': 'Message Time' },
    { 'columnId': 'sendMessage', 'columnAlias': 'Send Message' },
  ];
  prdname = ''
  isBuy = true;
  isSell = true;
  date = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().slice(0, 16);
  author = ''
  isLoading = false;

  log() {
    console.log(this.date)
  }

  getIntentFromInput() {
    if (this.isSell === this.isBuy) return ''
    else if (this.isSell && !this.isBuy) return 'sell'
    else if (this.isBuy && !this.isSell) return 'buy'
    else return ''
  }

  handleExcelRequest() {
    this.download(this.prdname, this.author, this.getIntentFromInput(), this.date ? new Date(this.date).getTime().toString() : undefined);
  }

  handleProductRequest() {
    this.isLoading = true;
    this.productService.getProducts(this.prdname, this.author, this.getIntentFromInput(), this.date ? new Date(this.date).getTime().toString() : undefined).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.data = res;
        if (this.data.length === 0) {
          this.toastr.info('No results found', 'Products Search')
        }
      }, error: (err) => {
        this.isLoading = false;
        this.toastr.error('Error: ' + JSON.stringify(err.error), 'Error while fetching data')
      }
    })
  }


  openDealInitDialog(prd: Product) {
    this.dialog.open(SendDealInitComponent, {
      data: prd
    }).afterClosed().subscribe(result => {
      console.log('dialog closed')
    })

  }

  constructor(private productService: ProductService, private toastr: ToastrService, private dialog: MatDialog) { }
  download(name?: string, author?: string, intent?: string, messagetime?: string) {
    this.toastr.info('Processing the file for you...', 'Please wait')
    this.productService.getProductsExcel(name, author, intent, messagetime).subscribe({
      next: (response: Blob) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url
        downloadLink.download = `products_${new Date().getUTCDate()}_${new Date().getUTCMonth()}_${new Date().getFullYear()}.xlsx`;
        downloadLink.click();
        this.toastr.success('Download started...', 'Success');
      }, error: (error) => {
        this.toastr.error(error.error?.message || error, 'Error');
      }
    });
  }
}
