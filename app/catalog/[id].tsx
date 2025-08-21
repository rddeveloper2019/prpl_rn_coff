import { SafeAreaView, View } from 'react-native';
import { AppText } from '../../shared/AppText';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

const Detail = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: `${id}` }} />
      <SafeAreaView>
        <AppText>Detail: {id}</AppText>
      </SafeAreaView>
    </>
  );
};

export default Detail;
