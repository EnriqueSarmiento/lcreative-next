import { HttpClient } from '@/http-client';
import { MentoringResponse } from './entities';

export const mentoringService = {
  getAll() {
    return HttpClient.get<MentoringResponse>('/mentorings/all');
  },
};
