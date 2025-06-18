import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild("togglerList") togglerList !: ElementRef<HTMLUListElement>;

  toggleMenuHandler(): void {
    this.togglerList.nativeElement.classList.toggle("js-show");
  }

  closeMenu(event: Event): void {
    const clickedElement = event.target as HTMLElement;

    if (clickedElement.tagName.toLowerCase() === 'a') {
      this.togglerList.nativeElement.classList.remove("js-show");
    }
  }
}
