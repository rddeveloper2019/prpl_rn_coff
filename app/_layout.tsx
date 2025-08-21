import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const AppLayout = () => {
  const [loaded, error] = useFonts({
    'Sora-Regular': require('../assets/fonts/Sora-Regular.ttf'),
    'Sora-SemiBold': require('../assets/fonts/Sora-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          gestureEnabled: true,
          contentStyle: {
            backgroundColor: Colors.Black,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: 'Логин',
            headerBackTitle: 'Главная',
            headerTransparent: true,
            headerTintColor: Colors.White,
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="intro"
          options={{
            headerShown: true,
            title: 'Логин',
            headerBackTitle: 'Главная',
            headerTransparent: true,
            headerTintColor: Colors.White,
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default AppLayout;
