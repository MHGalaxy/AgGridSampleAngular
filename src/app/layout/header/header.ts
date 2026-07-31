import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
})
export class HeaderComponent {
  constructor(private theme: ThemeService) {}

  changeMode(event: Event) {
    this.theme.setMode((event.target as HTMLSelectElement).value as any);
  }

  changePalette(event: Event) {
    this.theme.setPalette((event.target as HTMLSelectElement).value as any);
  }
}
