import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors, FontFamily, FontSize } from '../shared/tokens';
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
          headerShown: true,
          headerTransparent: true,
          animation: 'slide_from_right',
          gestureEnabled: true,
          contentStyle: {
            backgroundColor: Colors.Black,
          },
          headerTitleStyle: {
            fontWeight: 600,
            fontFamily: FontFamily.SoraSemiBold,
            fontSize: FontSize._16,
          },
          headerTintColor: Colors.White,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: '',
          }}
        />

        <Stack.Screen
          name="catalog"
          options={{
            headerShown: true,
            title: 'Catalog',
            headerBackTitle: '',
          }}
        />

        <Stack.Screen
          name="success"
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: '',
          }}
        />

        <Stack.Screen
          name="cart"
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: '',
          }}
        />

        <Stack.Screen
          name="address"
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: '',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default AppLayout;
