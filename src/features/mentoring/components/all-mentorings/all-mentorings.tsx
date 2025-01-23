import LandingSection from '@/features/ui/components/landing-section/landing-section';
import { useCallback, useMemo, useState } from 'react';
import { Mentoring } from '../../entities';
import { mentoringService } from '../../mentoring.service';
import { ErrorState } from '@/types/general';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { Button } from '@/features/ui/components';
import ErrorOutline from '@mui/icons-material/ErrorOutline';

const imageENV = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? null;

export default function AllMentorings() {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({ show: false, message: '' });

  const [mentorings, setMentorings] = useState<Mentoring[]>([]);

  const getAll = useCallback(async () => {
    if (mentorings.length) {
      return;
    }
    setIsFetching(true);
    setError((prev) => ({ ...prev, show: false }));
    try {
      const {
        data: { data },
      } = await mentoringService.getAll();
      setMentorings(data?.mentorings ?? []);
    } catch {
      setError({ show: true, message: 'Error mostrando las mentorias' });
    } finally {
      setIsFetching(false);
    }
  }, [mentorings]);

  useMemo(() => {
    console.log('USE MEMO MENTORING');
    getAll();
  }, []);

  const renderCallback = useMemo(() => {
    if (isFetching) {
      return Array.from({ length: 3 }).map((_, index) => (
        <Card
          key={`${index + 1}-key`}
          sx={{
            padding2: 2,
            width: 345,
            height: 600,
            borderRadius: 3,
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{
              width: '100%',
              height: 250,
            }}
          />
          <CardContent
            sx={{
              height: 250,
            }}
          >
            <Skeleton height={100} />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
          </CardContent>
          <CardActions>
            <Skeleton
              height={80}
              width={200}
              sx={{
                mx: 'auto',
              }}
            />
          </CardActions>
        </Card>
      ));
    }

    if (error.show) {
      return (
        <div className="w-full flex flex-col gap-3 justify-center items-center mt-5">
          <ErrorOutline
            sx={{
              width: 100,
              height: 100,
              color: 'red',
              margin: 'auto',
            }}
          />
          <Typography align="center" variant="h4" color="info">
            {error?.message ?? 'hubo un error'}
          </Typography>
        </div>
      );
    }

    return mentorings.map((item) => (
      <Card
        key={item?.key}
        sx={{
          padding: 2,
          width: 345,
          height: 600,
          borderRadius: 3,
          margin: 'auto',
        }}
      >
        {imageENV && item?.mentor?.avatar && (
          <CardMedia
            component="img"
            alt={item?.name}
            image={`${imageENV}/${item?.mentor?.avatar}`}
            sx={{
              height: 250,
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              padding: 2,
            }}
            loading="eager"
          />
        )}
        <CardContent
          sx={{
            height: 250,
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="select-none"
          >
            {item?.mentor?.name}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            className="select-none"
            color="info"
          >
            Mentor en: {item?.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ wordBreak: 'break-word', mt: 2 }}
            textAlign={'left'}
            className="select-none"
          >
            {item?.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            text="Mas informacion"
            onClick={() => router.push(`/mentoring/${item?.key}`)}
            labelProps={{
              labelClasses: {
                textTransform: 'capitalize',
                alignSelf: 'center',
              },
            }}
            sx={{
              margin: 'auto',
            }}
          />
        </CardActions>
      </Card>
    ));
  }, [isFetching, mentorings, error, router]);

  return (
    <LandingSection title="Mentorias" id="#mentoring">
      <div className="flex flex-row flex-wrap gap-4 items-center justify-between mt-10 md:px-20 w-full md:w-[70%] m-auto">
        {renderCallback}
      </div>
    </LandingSection>
  );
}
