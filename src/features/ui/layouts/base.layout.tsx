import { type FC, type ReactElement } from "react";
import { Header } from "../components";

type BaseLayoutProps = {
	children: ReactElement;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<div className="w-full h-screen flex flex-col bg-yellow-200">
			<Header />
			<main className="w-full h-full flex items-start bg-purple-400">
				{children}
			</main>
		</div>
	);
};
