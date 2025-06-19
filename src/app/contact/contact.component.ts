import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-contact',
  imports: [TitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showLabel(currentElement: string, inputLabel: HTMLElement): void {
    if (currentElement === ``) {
      inputLabel.classList.remove("js-show");

      return;
    }

    inputLabel.classList.add("js-show");
  }

  inputHandler(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputLabel = (event.currentTarget as HTMLElement).previousElementSibling as HTMLElement;
    const value = inputElement.value;

    this.showLabel(value, inputLabel);
  }
}
