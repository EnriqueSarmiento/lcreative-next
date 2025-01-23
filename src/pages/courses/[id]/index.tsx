import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';
import { useRouter } from 'next/router';

const DetailCourse: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="w-full h-full self-center">este es el course {id}</div>
  );
};

DetailCourse.layout = BaseLayout;

export default DetailCourse;
