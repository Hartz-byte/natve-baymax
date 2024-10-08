import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import SplashScreen from "@/components/SplashScreen";

export default function RootLayout() {
  // font load
  const [loaded] = useFonts({
    "Bangers-Regular": require("../assets/fonts/Bangers-Regular.ttf"),
    "Okra-Bold": require("../assets/fonts/Okra-Bold.ttf"),
    "Okra-Medium": require("../assets/fonts/Okra-Medium.ttf"),
    "Okra-MediumLight": require("../assets/fonts/Okra-MediumLight.ttf"),
    "Okra-Regular": require("../assets/fonts/Okra-Regular.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  // splash screen display timer
  useEffect(() => {
    if (!loaded) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 6000);
    }
  }, [loaded]);

  // splash screen display
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
