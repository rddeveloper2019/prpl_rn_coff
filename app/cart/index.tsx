import { SafeAreaView, View } from 'react-native';
import { AppText } from '../../shared/AppText';
import React from 'react';
import { Stack } from 'expo-router';

const Cart = () => {
  return (
    <>
      <Stack.Screen options={{ title: `Cart` }} />
      <SafeAreaView>
        <AppText>Cart</AppText>
      </SafeAreaView>
    </>
  );
};

export default Cart;
