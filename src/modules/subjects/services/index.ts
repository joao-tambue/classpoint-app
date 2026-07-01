import api from "@/infrastructure/api/axios";
import { ENDPOINTS } from "@/infrastructure/api/endpoints";
import type { Subject } from "../types";

export async function getSubjects(): Promise<Subject[]> {
  const response = await api.get<Subject[]>(ENDPOINTS.SUBJECTS.BASE);
  return response.data;
}

export async function getSubjectById(id: string): Promise<Subject> {
  const response = await api.get<Subject>(ENDPOINTS.SUBJECTS.BY_ID(id));
  return response.data;
}
