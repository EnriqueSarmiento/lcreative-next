export type MUIColorsPalette =
	| "primary"
	| "secondary"
	| "error"
	| "warning"
	| "success"
	| "info";

export type MUIPaletteColorOptions = {
	light: string;
	main: string;
	dark: string;
	contrastText?: string;
};

export type MUITypography =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "subtitle1"
	| "subtitle2"
	| "body1"
	| "body2"
	| "caption"
	| "button"
	| "overline";

export type Theme = {
	MUITypography: Record<MUITypography, string>;
	MUIColors: Record<MUIColorsPalette, MUIPaletteColorOptions>;
};
