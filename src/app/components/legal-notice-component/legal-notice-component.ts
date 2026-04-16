import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal-notice-component',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-notice-component.html',
  styleUrl: './legal-notice-component.scss',
})
export class LegalNoticeComponent {
  constructor(private location: Location) {}

  /**
   * Navigates the user back to the previous entry in the browser's history.
   * Commonly used for 'Cancel' buttons or back-arrows to return to the last visited view.
   */
  goBack() {
    this.location.back();
  }
}
