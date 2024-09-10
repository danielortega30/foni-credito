import "react-native-reanimated";

import * as SplashScreen from "expo-splash-screen";

import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="(blog)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(blog)" />
      <Stack.Screen name="(login)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
