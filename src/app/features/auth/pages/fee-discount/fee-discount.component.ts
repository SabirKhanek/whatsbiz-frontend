import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TfaPopupComponent } from 'src/app/shared/components/tfa-popup/tfa-popup.component';

@Component({
  selector: 'app-fee-discount',
  templateUrl: './fee-discount.component.html',
  styleUrls: ['./fee-discount.component.css']
})
export class FeeDiscountComponent {

  // ViewChild decorator to obtain a reference to the TfaPopupComponent
  @ViewChild(TfaPopupComponent) tfaPopupComponent!: TfaPopupComponent;
  
  // Boolean flag to track if a response has been received
  receivedResponse: boolean = false;

  // Boolean flag to indicate if the fee discount has been applied
  applyStatus: boolean = false;

  constructor(private router: Router) { }

  // Method to open the TFA popup by calling the openTfaPopup() method of TfaPopupComponent
  openTfaPopup() {
    this.tfaPopupComponent.openTfaPopup();
  }

  // Method called when data is received from the TfaPopupComponent
  onDataReceived(data: boolean) {
    this.receivedResponse = data;
    this.applyStatus = true;

  }
}
