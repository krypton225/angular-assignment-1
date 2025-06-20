import { Component, ElementRef, ViewChild } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { IPortfolioCard } from '../../interfaces/portfolio-card.interface';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-portfolio',
  imports: [
    TitleComponent,
    ModalComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  isModalOpen: boolean = false;
  selectedImage: string = ``;
  selectedImageAlt: string = ``;

  cards: IPortfolioCard[] = [
    {
      name: 'Project 3',
      imagePath: 'images/portfolio/portfolio-3.png',
    },
    {
      name: 'Project 1',
      imagePath: 'images/portfolio/portfolio-1.png',
    },
    {
      name: 'Project 2',
      imagePath: 'images/portfolio/portfolio-2.png',
    },
    {
      name: 'Project 5',
      imagePath: 'images/portfolio/portfolio-2.png',
    },
    {
      name: 'Project 6',
      imagePath: 'images/portfolio/portfolio-3.png',
    },
    {
      name: 'Project 4',
      imagePath: 'images/portfolio/portfolio-1.png',
    },
  ];

  openModal(event: Event): void {
    const cardElement = event.target as Element;
    const parentElement = cardElement.closest(`.portfolio-card`) as HTMLDivElement;
    const imgElement = parentElement.querySelector(`.portfolio-card__img img`) as HTMLImageElement;

    if (imgElement) {
      this.selectedImage = imgElement.src;
      this.selectedImageAlt = imgElement.alt || `Portfolio image`;

      this.isModalOpen = true;
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = ``;
  }
}
