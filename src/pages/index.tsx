import { BaseLayout, NextPageWithLayout } from "@/features/ui/layouts";

const IndexPage: NextPageWithLayout = () => {
	return <div className="bg-green-400 self-center">LA PAGINA DE INDEX</div>;
};

IndexPage.layout = BaseLayout;

export default IndexPage;
