import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Output('valueChange') onChange = new EventEmitter()
  @Input('value') isChecked = true;
  @Input('label') label = ''
  @Input('labelPosition') labelPosition: 'front' | 'back' = 'front';


  onSelectChange() {
    this.onChange.emit(this.isChecked)
  }
}
