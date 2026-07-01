import api from "@/infrastructure/api/axios";
import { ENDPOINTS } from "@/infrastructure/api/endpoints";
import type { Teacher } from "../types";

export async function getTeachers(): Promise<Teacher[]> {
  const response = await api.get<Teacher[]>(ENDPOINTS.TEACHERS.BASE);
  return response.data;
}

export async function getTeacherById(id: string): Promise<Teacher> {
  const response = await api.get<Teacher>(ENDPOINTS.TEACHERS.BY_ID(id));
  return response.data;
}
