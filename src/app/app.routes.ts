import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "intro",
    pathMatch: "full",
  },
  {
    path: `intro`,
    loadComponent: () => import(`./intro/intro.component`).then(m => m.IntroComponent),
    title: `Intro section`,
  },
  {
    path: `about`,
    loadComponent: () => import(`./about/about.component`).then(m => m.AboutComponent),
    title: `About section`,
  },
  {
    path: `portfolio`,
    loadComponent: () => import(`./portfolio/portfolio.component`).then(m => m.PortfolioComponent),
    title: `Portfolio section`,
  },
  {
    path: `contact`,
    loadComponent: () => import(`./contact/contact.component`).then(m => m.ContactComponent),
    title: `Contact section`,
  },
];
