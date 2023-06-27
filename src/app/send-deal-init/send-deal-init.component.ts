import { AIService } from './../services/ai/ai.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../types/product.type';
import { SocketService } from '../services/socket/socket.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-send-deal-init',
  templateUrl: './send-deal-init.component.html',
  styleUrls: ['./send-deal-init.component.scss']
})
export class SendDealInitComponent {
  serviceDestructor = new Subject()
  constructor(private dialogRef: MatDialogRef<SendDealInitComponent>, @Inject(MAT_DIALOG_DATA) public data: Product, private aiService: AIService, private socketService: SocketService, private toastr: ToastrService) {
    // Dialog Modal size
    dialogRef.addPanelClass(['md:w-3/5', 'w-full'])
    dialogRef.updateSize('960px', 'auto')
  }
  ngOnInit() {
    this.socketService.isWAConnected().pipe(takeUntil(this.serviceDestructor)).subscribe({
      next: res => {
        this.isWAConnected = res.result
        if (!res.result) {
          this.toastr.info('Connect to whatsapp to be able to send message', 'Cannot send message')
        }
      }, error: err => {
        console.log(err)
      }
    })
  }
  ngOnDestroy(): void {
    this.serviceDestructor.next(1);
    this.serviceDestructor.complete();
  }
  message = ''
  isWAConnected = false

  generateProposal() {
    this.message = 'Generating proposal...'
    this.aiService.generateProposal(this.data.intent, this.data.name, this.data.ram, this.data.storage, this.data.color).subscribe({
      next: proposal => {
        this.message = proposal.text
      }, error: err => {

        this.message = 'Error generating proposal - ' + JSON.stringify(err)
      }
    })
  }

  sendMessage() {
    this.socketService.sendMessageWA(this.message, this.data.author).subscribe({
      next: res => {
        this.toastr.success('Message sent successfully', 'Message sent')
        this.dialogRef.close()
      }, error: err => {
        this.toastr.error('Message not sent ' + err.error, 'Error')
      }
    })
  }
}
