import { AllCourses } from '@/features/courses/components';
import { AllMentorings } from '@/features/mentoring/components';
import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="w-full h-full self-center flex flex-col gap-10">
      <AllMentorings />
      <AllCourses />
    </div>
  );
};

IndexPage.layout = BaseLayout;

export default IndexPage;
