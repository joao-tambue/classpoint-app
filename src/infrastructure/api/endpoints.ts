export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    PROFILE: "/auth/profile",
  },
  STUDENTS: {
    BASE: "/students",
    BY_ID: (id: string) => `/students/${id}`,
  },
  TEACHERS: {
    BASE: "/teachers",
    BY_ID: (id: string) => `/teachers/${id}`,
  },
  CLASSES: {
    BASE: "/classes",
    BY_ID: (id: string) => `/classes/${id}`,
  },
  SUBJECTS: {
    BASE: "/subjects",
    BY_ID: (id: string) => `/subjects/${id}`,
  },
} as const;
