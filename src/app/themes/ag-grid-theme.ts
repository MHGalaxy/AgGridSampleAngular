import { themeQuartz } from 'ag-grid-community';

export const myTheme = themeQuartz.withParams({
  accentColor: '#68FF8E',
  backgroundColor: '#1f2836',
  borderColor: '#429356',
  borderRadius: 0,
  browserColorScheme: 'dark',
  cellHorizontalPaddingScale: 0.8,
  cellTextColor: '#50F178',
  chromeBackgroundColor: {
    ref: 'foregroundColor',
    mix: 0.07,
    onto: 'backgroundColor',
  },
  columnBorder: true,
  fontFamily: {
    googleFont: 'IBM Plex Mono',
  },
  fontSize: 12,
  foregroundColor: '#FFF',
  headerBackgroundColor: '#21222C',
  headerFontWeight: 700,
  headerTextColor: '#68FF8E',
  headerVerticalPaddingScale: 1.5,
  oddRowBackgroundColor: '#21222C',
  rowBorder: true,
  rowVerticalPaddingScale: 1.5,
  spacing: 4,
  wrapperBorder: true,
  wrapperBorderRadius: 0,
});
