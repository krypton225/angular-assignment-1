import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { IPortfolioCard } from '../../interfaces/portfolio-card.interface';

@Component({
  selector: 'app-portfolio',
  imports: [TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
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
}
