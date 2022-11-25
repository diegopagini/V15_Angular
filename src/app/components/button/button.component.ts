import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit';
  @Output() onClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.onClick.emit();
  }
}
