import { Component, EventEmitter, Input, Output, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  classes = ''
  @Input('type') type = 'text'
  @Input('value') value: any = ''
  @Output('valueChange') valueChange = new EventEmitter()
  @Input('label') label = ''
  @Input('placeholder') placeholder = ''
  @Input('fieldSize') fieldSize: 'regular' | 'small' | 'large' = 'regular';
  @Input('id') id = ''
  @Input('error') error = ''
  @Input('disabled') disabled = false

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit() {
    const componentClasses: DOMTokenList = this.elementRef.nativeElement.classList;
    this.classes = componentClasses.toString()
  }


  onChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value
    this.valueChange.emit((event.target as HTMLInputElement).value)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return event;
  }
}
