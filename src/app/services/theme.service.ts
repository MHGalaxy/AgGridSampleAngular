import { Injectable, signal } from '@angular/core';
import { ThemeMode, ThemePalette, ThemeSettings } from '../models/theme.model';

import { Theme, themeQuartz } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: ThemeSettings = {
    mode: 'light',
    palette: 'blue',
  };

  readonly agGridTheme = signal<Theme>(this.createBaseGridTheme());

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
    this.agGridTheme.set(this.createBaseGridTheme());
  }

  private css(variable: string): string {
    return getComputedStyle(document.body).getPropertyValue(variable).trim();
  }

  private createBaseGridTheme(): Theme {
    return themeQuartz.withParams({
      accentColor: this.css('--primary-color'),

      backgroundColor: this.css('--surface-color'),

      foregroundColor: this.css('--text-color'),

      headerBackgroundColor: this.css('--surface-color'),

      headerTextColor: this.css('--text-color'),

      browserColorScheme: this.theme.mode,

      borderRadius: 2,

      fontSize: 13,

      spacing: 6,

      wrapperBorder: false,

      rowBorder: true,

      sidePanelBorder: true,
    });
  }

  createGridTheme(params?: any): Theme {
    return this.agGridTheme().withParams(params ?? {});
  }
}
