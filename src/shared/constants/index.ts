export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3000/api";
export const API_TIMEOUT = 10000;

export const STORAGE_KEYS = {
  ONBOARDING_COMPLETED: "onboarding_completed",
  USER_PROFILE: "user_profile",
  THEME: "app_theme",
} as const;

export const APP_NAME = "Classpoint";
