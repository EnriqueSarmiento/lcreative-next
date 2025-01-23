import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';
import { useRouter } from 'next/router';

const DetailMentoring: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="w-full h-full self-center">este es el mentoring {id}</div>
  );
};

DetailMentoring.layout = BaseLayout;

export default DetailMentoring;
