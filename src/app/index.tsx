import { useEffect } from "react";
import { useRouter } from "expo-router";
import { getItem } from "@/infrastructure/storage/async-storage";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    getItem("onboarding_completed").then((value) => {
      if (value !== "true") {
        router.replace("/(onboarding)" as any);
      } else {
        router.replace("/(home)" as any);
      }
    });
  }, [router]);

  return null;
}
