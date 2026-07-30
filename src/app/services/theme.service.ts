import { Injectable } from '@angular/core';
import { ThemeMode, ThemePalette, ThemeSettings } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: ThemeSettings = {
    mode: 'light',
    palette: 'blue',
  };

  constructor() {
    this.applyTheme();
  }

  setMode(mode: ThemeMode) {
    this.theme.mode = mode;
    this.applyTheme();
  }

  setPalette(palette: ThemePalette) {
    this.theme.palette = palette;
    this.applyTheme();
  }

  getTheme() {
    return this.theme;
  }

  private applyTheme() {
    document.body.className = '';

    document.body.classList.add(this.theme.mode);
    document.body.classList.add(this.theme.palette);
  }
}
