import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: SelectOption[];
  @Input('selected') selectedOption = '';
  @Output('selectedChange') optionSelected = new EventEmitter<string>();

  onChange() {
    this.optionSelected.emit(this.selectedOption);
  }
}

interface SelectOption {
  value: string;
  label: string;
}
