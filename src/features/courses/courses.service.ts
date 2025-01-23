import { HttpClient } from '@/http-client';
import { CoursesAllResponse } from './entities';

export const coursesService = {
  getAll() {
    return HttpClient.get<CoursesAllResponse>('/Courses/all');
  },
};
