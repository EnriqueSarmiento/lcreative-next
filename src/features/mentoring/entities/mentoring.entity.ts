export interface MentoringResponse {
  data: Data;
}

export interface DetailMentoringResponse {
  data: MentoringData;
}

export interface MentoringData {
  mentoring: Mentoring;
}

export interface Data {
  mentorings: Mentoring[];
  totalMentorings: number;
  totalPages: number;
}

export interface Mentoring {
  categoryKey: string;
  characteristics: Characteristic[];
  description: string;
  detail: string;
  image: string;
  isActive: boolean;
  key: string;
  mentorKey: string;
  name: string;
  price: number;
  promotionalPrice?: number;
  tax: number;
  title: string;
  updatedAt: Date;
  mentor: Mentor;
  createdAt?: Date;
  quantity?: number;
  ranking?: number;
}

export interface Characteristic {
  description: string;
  icon: string;
  isActive: boolean;
  name?: string;
  nanme?: string;
}

export interface Mentor {
  avatar: string;
  biography: string;
  email: string;
  key: string;
  name: string;
  numberOfMentoring: number;
  role: string;
}
