export type ThemeMode = 'light' | 'dark';

export type ThemePalette = 'blue' | 'brown' | 'purple';

export interface ThemeSettings {
  mode: ThemeMode;

  palette: ThemePalette;
}
