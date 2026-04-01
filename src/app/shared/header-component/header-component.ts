import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  isOpen = false;
  currentLanguage: string = 'de';

  navClick(): void {
    this.isOpen = !this.isOpen;
    this.toggleDialog();
  }

  toggleDialog() {
    const dialogRef = document.getElementById('dialog-menu') as HTMLDialogElement;
    const languageDiv = document.getElementById('language');
    const bodyRef = document.getElementById('body');
    if (dialogRef.open) {
      dialogRef.close();
      this.isOpen = false;
      if (languageDiv) {
        languageDiv.style.display = '';
      }
      if (bodyRef) {
        bodyRef.style.overflow = '';
      }
    } else {
      dialogRef.show();
      if (bodyRef) {
        bodyRef.style.overflow = 'hidden';
      }
      if (window.innerWidth <= 640 && languageDiv) {
        languageDiv.style.display = 'flex';
      }
    }
  }

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
