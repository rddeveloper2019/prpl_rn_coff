import { SafeAreaView, View } from 'react-native';
import { AppText } from '../../shared/AppText';
import React from 'react';
import { Stack } from 'expo-router';

const Catalog = () => {
  return (
    <>
      <Stack.Screen options={{ title: `Catalog` }} />
      <SafeAreaView>
        <AppText>Catalog</AppText>
      </SafeAreaView>
    </>
  );
};

export default Catalog;
