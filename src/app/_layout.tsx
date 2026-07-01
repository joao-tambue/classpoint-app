import "../global.css";

import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Outfit-Regular": require("@expo-google-fonts/outfit/400Regular/Outfit_400Regular.ttf.png"),
        "Outfit-Medium": require("@expo-google-fonts/outfit/500Medium/Outfit_500Medium.ttf.png"),
        "Outfit-SemiBold": require("@expo-google-fonts/outfit/600SemiBold/Outfit_600SemiBold.ttf.png"),
        "Outfit-Bold": require("@expo-google-fonts/outfit/700Bold/Outfit_700Bold.ttf.png"),
      });
      setLoaded(true);
    }
    loadFonts();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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
