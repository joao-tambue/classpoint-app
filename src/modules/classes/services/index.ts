import api from "@/infrastructure/api/axios";
import { ENDPOINTS } from "@/infrastructure/api/endpoints";
import type { Class } from "../types";

export async function getClasses(): Promise<Class[]> {
  const response = await api.get<Class[]>(ENDPOINTS.CLASSES.BASE);
  return response.data;
}

export async function getClassById(id: string): Promise<Class> {
  const response = await api.get<Class>(ENDPOINTS.CLASSES.BY_ID(id));
  return response.data;
}
