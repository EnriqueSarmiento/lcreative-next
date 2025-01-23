import { HttpClient } from '@/http-client';
import { DetailMentoringResponse, MentoringResponse } from './entities';

export const mentoringService = {
  getAll() {
    return HttpClient.get<MentoringResponse>('/mentorings/all');
  },
  getOne(key: string) {
    return HttpClient.get<DetailMentoringResponse>(
      `/mentorings/show?pKey=${key}`,
    );
  },
};
