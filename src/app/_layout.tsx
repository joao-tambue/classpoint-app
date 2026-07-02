import "../global.css";

import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Outfit-Regular": require("../../assets/fonts/outfit/OutfitRegular.ttf"),
        "Outfit-Medium": require("../../assets/fonts/outfit/OutfitMedium.ttf"),
        "Outfit-SemiBold": require("../../assets/fonts/outfit/OutfitSemiBold.ttf"),
        "Outfit-Bold": require("../../assets/fonts/outfit/OutfitBold.ttf"),
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
