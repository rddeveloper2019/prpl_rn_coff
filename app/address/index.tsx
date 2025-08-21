import { SafeAreaView, View } from 'react-native';
import { AppText } from '../../shared/AppText';
import React from 'react';
import { Stack } from 'expo-router';

const Address = () => {
  return (
    <>
      <Stack.Screen options={{ title: `Address` }} />
      <SafeAreaView>
        <AppText>Address</AppText>
      </SafeAreaView>
    </>
  );
};

export default Address;
