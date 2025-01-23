import { coursesService } from '@/features/courses/courses.service';
import { Course } from '@/features/courses/entities';
import { BaseLayout, NextPageWithLayout } from '@/features/ui/layouts';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

const imageENV = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? null;

const DetailCourse: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const [course, setMentoring] = useState<Course | null>(null);

  const getData = useCallback(async () => {
    if (!id) {
      return;
    }

    try {
      const {
        data: { data },
      } = await coursesService.getOne(id as string);

      // const {
      //   data: { data: allMentorings },
      // } = await coursesService.getAll();

      setMentoring(data?.item ?? null);
      console.log('data', data?.item);
    } catch (error) {
      console.log('hay un error', error);
    }
  }, [course, id]);

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div className="w-full h-full self-center px-6 py-4">
      {course && (
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center  justify-start ">
            <div className="min-w-[345px] max-w-[15vw] min-h-[345] h-[10%]  max-h-[30vh] rounded-full relative bg-purple-300 ">
              <Image
                src={
                  imageENV && course?.image
                    ? `${imageENV}/${course?.image}`
                    : ''
                }
                alt={course?.name}
                fill
                className="rounded-sm object-cover object-center "
              />
            </div>
            <div className="w-[65%] mx-auto gap-3">
              <Typography variant="h4" color="primary.dark">
                {course?.name}
              </Typography>
              <Typography>{course?.description}</Typography>
              {course?.characteristics?.map((item) => (
                <div
                  className="w-full flex flex-row items-center gap-2"
                  key={item?.icon}
                >
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography color="secondary">{item?.description}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div className="w-full flex flex-col gap-10 mt-10">
      {Boolean(mentorings.length) && (
        <Typography variant="h4" align="center" color="primary.dark">
          Mas Cursos con {course?.mentor?.name}
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
    </div> */}
    </div>
  );
};

DetailCourse.layout = BaseLayout;

export default DetailCourse;
