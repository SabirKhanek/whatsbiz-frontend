import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-floating-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class FloatingInputComponent {
  @Input('type') type = 'text'
  @Input('value') value = ''
  @Output('change') onChange = new EventEmitter()
  @Input('label') label = ''
  @Input('placeholder') placeholder = ''
  @Input('fill') filled = true;
}
