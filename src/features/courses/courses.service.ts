import { HttpClient } from '@/http-client';
import { CoursesAllResponse, DetailCourseResponse } from './entities';

export const coursesService = {
  getAll() {
    return HttpClient.get<CoursesAllResponse>('/Courses/all');
  },
  getOne(key: string) {
    return HttpClient.get<DetailCourseResponse>(`/courses/show?pKey=${key}`);
  },
};
