import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  faXmark = faXmark;

  @Input()
  data: any;

  @Output()
  onClose: EventEmitter<void> = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}
