import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-component',
  imports: [TranslatePipe],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.scss',
})
export class PortfolioComponent {
  constructor() {}

  ngOnInit(): void {
    // Hier rufen wir die Methode auf, wenn die Komponente geladen wird
    this.initPortfolioScroll();
  }

  initPortfolioScroll(): void {
    if (window.innerWidth >= 1024) return; // Early Return: Tu nichts, wenn Desktop

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // toggleClass fügt hinzu wenn im Bild, entfernt wenn draußen
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.8, rootMargin: '10% 0px 10% 0px' },
    );

    document
      .querySelectorAll('.left-content, .right-content')
      .forEach((el) => observer.observe(el));
  }
}
