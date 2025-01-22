import { Theme } from "@/types/theme";
import { createTheme } from "@mui/material";

export const theme: Theme = {
	MUITypography: {
		h1: "h1",
		h2: "h2",
		h3: "h3",
		h4: "h4",
		h5: "h5",
		h6: "h6",
		subtitle1: "subtitle1",
		subtitle2: "subtitle2",
		body1: "body1",
		body2: "body2",
		caption: "caption",
		button: "button",
		overline: "overline",
	},
	MUIColors: {
		primary: {
			main: "#F8D347",
			dark: "#CDA700",
			light: "#FFE07F",
			contrastText: "#231B00",
		},
		secondary: {
			main: "#008585",
			dark: "#006A6A",
			light: "#00BEBE",
		},
		error: {
			main: "#C62828",
			dark: "#C62828",
			light: "#EF5350",
		},
		warning: {
			main: "#E65100",
			dark: "#E65100",
			light: "#FF9800",
		},
		success: {
			main: "#2E7D32",
			dark: "#1B5E20",
			light: "#4CAF50",
		},
		info: {
			dark: "#000000DE",
			main: "#00000099",
			light: "#F5F5F5",
		},
	},
};

export const materialTheme = createTheme({
	palette: {
		...theme.MUIColors,
	},
});
