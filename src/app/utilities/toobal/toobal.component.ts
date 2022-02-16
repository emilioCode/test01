import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toobal',
  templateUrl: './toobal.component.html',
  styleUrls: ['./toobal.component.css']
})
export class ToobalComponent {
  @Input() title: string = '';
  @Input() iconTitle: string = '';
  @Input() colorButton: string = '';
  @Input() iconButton: string = '';
  @Input() textButton: string = '';

  @Output() clickButton = new EventEmitter<boolean>();

  constructor() { }

  clickBtn() {
    this.clickButton.emit(true);
  };

}
