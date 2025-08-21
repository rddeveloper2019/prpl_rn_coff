import { SafeAreaView, View } from 'react-native';
import { AppText } from '../../shared/AppText';
import React from 'react';
import { Stack } from 'expo-router';

const Success = () => {
  return (
    <>
      <Stack.Screen options={{ title: `Success` }} />
      <SafeAreaView>
        <AppText>Success</AppText>
      </SafeAreaView>
    </>
  );
};

export default Success;
