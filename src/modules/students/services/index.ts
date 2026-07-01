import api from "@/infrastructure/api/axios";
import { ENDPOINTS } from "@/infrastructure/api/endpoints";
import type { Student, StudentFilters } from "../types";
import type { PaginatedResponse } from "@/shared/types";

export async function getStudents(
  filters?: StudentFilters
): Promise<PaginatedResponse<Student>> {
  const response = await api.get<PaginatedResponse<Student>>(
    ENDPOINTS.STUDENTS.BASE,
    { params: filters }
  );
  return response.data;
}

export async function getStudentById(id: string): Promise<Student> {
  const response = await api.get<Student>(ENDPOINTS.STUDENTS.BY_ID(id));
  return response.data;
}
