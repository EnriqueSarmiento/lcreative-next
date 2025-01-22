import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

class NextDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
				</Head>
				<body>
					<noscript></noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default NextDocument;
