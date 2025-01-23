import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';

const DetailCourse: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="w-full h-full self-center">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
};

DetailCourse.layout = BaseLayout;

export default DetailCourse;
