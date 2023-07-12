import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {
  @Input() options: SelectOption[];
  @Input('selected') selectedOption: any[] = [];
  @Output('selectedChange') optionSelected = new EventEmitter<any[]>();
  selections;

  constructor() {
    this.selections = new SelectionModel<any[]>(true, []);
  }

  ngOnInit(): void {
    this.selectedOption = this.options.filter(option => this.selectedOption.map(o => o.value).includes(option))
    this.selections.select(...this.selectedOption);
  }

  onChange() {
    this.optionSelected.emit(this.selections.selected);
  }
}

interface SelectOption {
  value: any;
  label: string;
}
