export interface Class {
  id: string;
  name: string;
  year: number;
  teacherId: string;
  subjectIds: string[];
  studentCount?: number;
}
