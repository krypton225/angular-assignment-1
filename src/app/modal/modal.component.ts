import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() jsOpen: boolean = false;
  @Input() imagePath: string = ``;
  @Input() imageAlt: string = `Modal image`;

  @Output() closeModal = new EventEmitter<void>();

  onOverlayClick(): void {
    this.closeModal.emit();
  }

  onContentClick(event: Event): void {
    event.stopPropagation();
  }
}
