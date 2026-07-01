import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="loading" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(home)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
