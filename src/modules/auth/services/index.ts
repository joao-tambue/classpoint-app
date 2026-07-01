import api from "@/infrastructure/api/axios";
import { ENDPOINTS } from "@/infrastructure/api/endpoints";
import type { LoginRequest, RegisterRequest, AuthResponse } from "../types";

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>(ENDPOINTS.AUTH.LOGIN, data);
  return response.data;
}

export async function register(data: RegisterRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>(ENDPOINTS.AUTH.REGISTER, data);
  return response.data;
}

export async function logout(): Promise<void> {
  await api.post(ENDPOINTS.AUTH.LOGOUT);
}

export async function getProfile(): Promise<AuthResponse["user"]> {
  const response = await api.get<AuthResponse["user"]>(ENDPOINTS.AUTH.PROFILE);
  return response.data;
}
