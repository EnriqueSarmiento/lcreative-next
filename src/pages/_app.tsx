import { type ReactElement } from "react";
import Head from "next/head";

import { AppPropsWithLayout } from "@/features/ui/layouts";
import "@/styles/globals.css";
import { ThemeProvider, THEME_ID } from "@mui/material/styles";
import { materialTheme } from "@/features/theme";

type DefaultPageProps = {
	children: ReactElement;
};

export default function NextApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout =
		Component.layout ?? (({ children }: DefaultPageProps) => children);

	return (
		<ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
			<Head>
				<title>LCreative</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
