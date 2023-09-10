
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tfa-popup',
  templateUrl: './tfa-popup.component.html',
  styleUrls: ['./tfa-popup.component.css']
})
export class TfaPopupComponent {

  showPopup: boolean = false; // Flag to control the visibility of the TFA popup

  // Variables to store the input values for each digit of the TFA code
  tfaCodeDigit1!: number;
  tfaCodeDigit2!: number;
  tfaCodeDigit3!: number;
  tfaCodeDigit4!: number;
  tfaCodeDigit5!: number;
  tfaCodeDigit6!: number;

  userVerificationCode: string = ''; // Combined string value of the TFA code digits

  response: boolean = false; // Flag indicating the response of the TFA verification

  verificationError: boolean = false; // Flag indicating if there's a verification error
  errorMessage: string = ''; // Error message to display in case of verification error

  @Output() verificationStatus = new EventEmitter<boolean>(); // Event emitter to send the verification status

  @ViewChild('digit1') focusDigit1Input!: ElementRef; // Reference to the input element for the first TFA digit

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Opens the TFA popup and sets focus on the first input digit
  openTfaPopup() {
    this.showPopup = true;

    setTimeout(() => {
      this.focusDigit1Input.nativeElement.focus();
    }, 0);
  }

  // Resets the TFA code digits to NaN (empty)
  reset() {
    this.tfaCodeDigit1 = NaN;
    this.tfaCodeDigit2 = NaN;
    this.tfaCodeDigit3 = NaN;
    this.tfaCodeDigit4 = NaN;
    this.tfaCodeDigit5 = NaN;
    this.tfaCodeDigit6 = NaN;
  }

  // Closes the TFA popup and resets the TFA code digits
  closeTfaPopup() {
    this.showPopup = false;

    this.reset();
    this.errorMessage = '';
  }


  // Limits the input length to 1 character for each TFA digit input
  limitInputLength(event: any) {
    const inputValue = event.target.value;
    if (inputValue.length > 1) {
      event.target.value = inputValue.slice(0, 1);
    }
  }

  // Updates the combined TFA code value whenever any digit is changed
  updateVerificationCode() {
    this.userVerificationCode = `${this.tfaCodeDigit1}${this.tfaCodeDigit2}${this.tfaCodeDigit3}${this.tfaCodeDigit4}${this.tfaCodeDigit5}${this.tfaCodeDigit6}`;
  }

  // Handles the movement between TFA digits based on key events
  move(event: any, previousDigit: any, currentDigit: any, nextDigit: any) {
    let length = currentDigit.value.length;
    let maxlength = currentDigit.getAttribute('maxlength');

    if (length == 1) {
      if (nextDigit != "") {
        nextDigit.focus();
      }
    }

    if (event.key === "Backspace") {
      if (previousDigit != "") {
        previousDigit.focus();
      }
    }

    this.updateVerificationCode();
  }

  // Sends the TFA code for verification
  verify() {
    const url = 'http://localhost:3000/tfa-verification'; // URL for the TFA verification endpoint.

    const body = {
      userVerificationCode: this.userVerificationCode // Request body containing the user's verification code.
    };

    // Make the POST request to the TFA verification endpoint
    this.http.post(url, body, { withCredentials: true }).subscribe(
      (res) => {
        // Verification succeeded
        this.response = true; // Set the response status to true.
        this.verificationStatus.emit(this.response); // Emit the verification status to the parent component.
        this.closeTfaPopup(); // Close the TFA popup.
      },
      (err) => {
        // Verification failed
        this.response = false; // Set the response status to false.
        this.verificationStatus.emit(this.response); // Emit the verification status to the parent component.
        this.verificationError = true; // Set the verification error flag to true.
        this.errorMessage = err.error.message; // Store the error message from the server response.
      }
    );
  }
}


