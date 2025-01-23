import { Mentoring } from '@/features/mentoring/entities';
import { mentoringService } from '@/features/mentoring/mentoring.service';
import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';

import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const imageENV = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? null;

const DetailMentoring: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const [mentoring, setMentoring] = useState<Mentoring | null>(null);
  const [mentorings, setMentorings] = useState<Mentoring[]>([]);

  const getData = useCallback(async () => {
    if (!id) {
      return;
    }

    try {
      const {
        data: { data },
      } = await mentoringService.getOne(id as string);

      const {
        data: { data: allMentorings },
      } = await mentoringService.getAll();

      setMentoring(data?.mentoring ?? null);
      setMentorings(
        allMentorings?.mentorings?.filter(
          (item) =>
            item.key !== id &&
            item?.mentor?.key === data?.mentoring?.mentor?.key,
        ) ?? [],
      );
    } catch (error) {
      console.log('hay un error', error);
    }
  }, [mentoring, id]);

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="w-full h-full self-center px-6 py-4">
      {mentoring && (
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row items-center gap-3">
            <Avatar
              alt={mentoring?.mentor?.name}
              src={
                imageENV && mentoring?.mentor?.avatar
                  ? `${imageENV}/${mentoring?.mentor?.avatar}`
                  : ''
              }
              sx={{ width: 150, height: 150 }}
            />
            <div>
              <Typography variant="h4">{mentoring?.mentor?.name}</Typography>
              <Typography variant="h6" color="info">
                {mentoring?.mentor?.email}
              </Typography>
            </div>
          </div>

          <div>
            <Typography>{mentoring?.mentor?.biography}</Typography>
          </div>

          {mentoring?.characteristics?.map((item) => (
            <div
              className="w-full flex flex-row items-center gap-2"
              key={item?.icon}
            >
              <Typography
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {item?.name ? item?.name : item?.nanme}:{' '}
              </Typography>
              <Typography color="secondary">{item?.description}</Typography>
            </div>
          ))}

          {/* <div dangerouslySetInnerHTML={{ __html: mentoring?.detail }}></div> */}
          <div className="flex flex-col md:flex-row gap-4 items-center  justify-start ">
            <div className="w-[100%] max-w-[450px] min-h-[250px] max-h-[500px]  rounded-full relative ">
              {/* <div className="w-[250px] h-[250px] rounded-full relative mx-auto"> */}
              <Image
                src={
                  imageENV && mentoring?.image
                    ? `${imageENV}/${mentoring?.image}`
                    : ''
                }
                alt={mentoring?.name}
                fill
                className="rounded-sm object-cover object-center"
              />
            </div>
            <Card
              sx={{
                padding2: 2,
                width: '100%',
                maxWidth: 600,

                borderRadius: 3,
              }}
            >
              <CardContent>
                <div className="w-[65%] mx-auto">
                  <Typography variant="h4" color="primary.dark">
                    {mentoring?.name}
                  </Typography>
                  <Typography>{mentoring?.description}</Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-10 mt-10">
        {Boolean(mentorings.length) && (
          <Typography variant="h4" align="center" color="primary.dark">
            Mas Cursos con {mentoring?.mentor?.name}
          </Typography>
        )}

        <div className="w-full flex flex-col md:flex-row gap-10 mx-auto justify-center">
          {mentorings.map((item) => (
            <Card
              key={item?.key}
              sx={{
                padding2: 2,
                width: 345,
                height: 500,
                borderRadius: 3,
              }}
            >
              {imageENV && item?.mentor?.avatar && (
                <CardMedia
                  component="img"
                  alt={item?.name}
                  image={`${imageENV}/${item?.image}`}
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
                  height: 150,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="select-none"
                >
                  {item?.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ wordBreak: 'break-word', mt: 2 }}
                  textAlign={'left'}
                  className="select-none"
                >
                  {item?.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

DetailMentoring.layout = BaseLayout;

export default DetailMentoring;
