import type { User } from "@/shared/types";

export interface Teacher extends User {
  role: "teacher";
  specialization?: string;
  subjects: string[];
}
