import type { User } from "@/shared/types";

export interface Student extends User {
  role: "student";
  classId?: string;
  registrationNumber: string;
}

export interface StudentFilters {
  name?: string;
  classId?: string;
  page?: number;
  limit?: number;
}
