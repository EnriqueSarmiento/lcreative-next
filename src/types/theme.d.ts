export type MUIColorsPalette =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';

export type ThemeColor =
  | 'primary900'
  | 'primary800'
  | 'primary700'
  | 'primary600'
  | 'primary500'
  | 'primary400'
  | 'primary300'
  | 'primary200'
  | 'primary100'
  | 'primary50'
  | 'secondary900'
  | 'secondary800'
  | 'secondary700'
  | 'secondary600'
  | 'secondary500'
  | 'secondary400'
  | 'secondary300'
  | 'secondary200'
  | 'secondary100'
  | 'secondary50'
  | 'dark900'
  | 'dark800'
  | 'dark700'
  | 'dark600'
  | 'dark500'
  | 'dark400'
  | 'dark300'
  | 'dark200'
  | 'dark100'
  | 'white';

export type MUIPaletteColorOptions = {
  light: string;
  main: string;
  dark: string;
  contrastText?: string;
};

export type Theme = {
  colors: Record<ThemeColor, string>;
  MUIColors: Record<MUIColorsPalette, MUIPaletteColorOptions>;
};
