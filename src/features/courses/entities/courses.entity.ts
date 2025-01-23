export interface CoursesAllResponse {
  data: Data;
}

export interface Data {
  items: Course[];
  total: number;
  totalPages: number;
}

export interface Course {
  categoryKey: string;
  characteristics: Characteristic[];
  createdAt: Date;
  description: string;
  image: string;
  isActive: boolean;
  key: string;
  mentorKey: string;
  name: string;
  price: number;
  quantity: number;
  ranking: number;
  tax: number;
  title: string;
  updatedAt: Date;
  view: number;
}

export interface Characteristic {
  description: string;
  icon: string;
  isActive: boolean;
  name: string;
}
