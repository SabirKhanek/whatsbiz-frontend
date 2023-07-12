import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core'

@Component({
    selector: 'app-input-modal',
    templateUrl: './input-modal.component.html',
    styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent {
    title: string = '';
    fields: InputModalField[] = []
    constructor(private dialogRef: MatDialogRef<InputModalComponent>, @Inject(MAT_DIALOG_DATA) public data?: InputModalData) {
        // Dialog Modal size
        dialogRef.addPanelClass(['md:w-3/5', 'w-full'])
        dialogRef.updateSize('960px', 'auto')

        this.title = data?.title || 'Input in the following fields'
        this.fields = data?.fields || []
    }

    close() {
        const result: any = {}
        this.fields.forEach((field) => {
            result[field.id] = field.value
        })
        this.dialogRef.close(result)
    }
}
export type InputModalField = { id: string, label: string, placeholder?: string, value: string, type?: string }
export type InputModalData = { title: string, fields: InputModalField[] }