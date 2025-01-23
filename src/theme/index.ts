import { Theme } from '@/types/theme';
import { createTheme } from '@mui/material';

export const theme: Theme = {
  colors: {
    primary900: '#271F01',
    primary800: '#4F3E03',
    primary700: '#8A6D05',
    primary600: '#C59C07',
    primary500: '#F6C513',
    primary400: '#F8D347',
    primary300: '#FBE289',
    primary200: '#FDF1C4',
    primary100: '#FEFAEB',
    primary50: '#FFFDF4',

    secondary900: '#002929',
    secondary800: '#003D3D',
    secondary700: '#007A7A',
    secondary600: '#00A6A6',
    secondary500: '#00CCCC',
    secondary400: '#00F5F5',
    secondary300: '#99FFFF',
    secondary200: '#C2FFFF',
    secondary100: '#EBFFFF',
    secondary50: '#F5FFFF',

    dark900: '#171717',
    dark800: '#3D3D3D',
    dark700: '#5C5C5C',
    dark600: '#7A7A7A',
    dark500: '#FFFFFF',
    dark400: '#CCCCCC',
    dark300: '#EBEBEB',
    dark200: '#F5F5F5',
    dark100: '#FCFCFC',

    white: 'rgba(255, 255, 255, 1)',
  },
  MUIColors: {
    primary: {
      main: '#F8D347',
      dark: '#CDA700',
      light: '#FFE07F',
      contrastText: '#231B00',
    },
    secondary: {
      main: '#008585',
      dark: '#006A6A',
      light: '#00BEBE',
    },
    error: {
      main: '#C62828',
      dark: '#C62828',
      light: '#EF5350',
    },
    warning: {
      main: '#E65100',
      dark: '#E65100',
      light: '#FF9800',
    },
    success: {
      main: '#2E7D32',
      dark: '#1B5E20',
      light: '#4CAF50',
    },
    info: {
      dark: '#000000DE',
      main: '#00000099',
      light: '#F5F5F5',
    },
  },
};

export const materialTheme = createTheme({
  palette: {
    ...theme.MUIColors,
  },
});
