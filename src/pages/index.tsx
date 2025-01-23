import { AllMentorings } from '@/features/mentoring/components';
import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="w-full h-full self-center">
      <AllMentorings />
    </div>
  );
};

IndexPage.layout = BaseLayout;

export default IndexPage;
