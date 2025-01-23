export interface CoursesAllResponse {
  data: Data;
}

export interface DetailCourseResponse {
  data: DataDetail;
}

export interface DataDetail {
  item: Course;
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
  class?: Class[];
}

export interface Characteristic {
  description: string;
  icon: string;
  isActive: boolean;
  name: string;
}

export interface Class {
  courseKey: string;
  createdAt: Date;
  description: string;
  isActive: boolean;
  name: string;
  orden: number;
  resource: Resource;
  video: string;
  key: string;
}

export interface Resource {
  file: string;
  name: string;
}
