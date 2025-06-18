import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild("navbarHeader") navbarHeader !: ElementRef<HTMLElement>;
  @ViewChild("togglerList") togglerList !: ElementRef<HTMLUListElement>;

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const MIN_SCROLL_TOP = 10;

    if (window.scrollY > MIN_SCROLL_TOP) {
      this.navbarHeader.nativeElement.classList.add("js-scrollable");
    } else {
      this.navbarHeader.nativeElement.classList.remove("js-scrollable");
    }
  }

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
