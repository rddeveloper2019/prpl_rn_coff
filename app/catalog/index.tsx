import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { db } from '../../entities/coffee/model/coffee..state';
import { SearchPanel } from '../../widgets/SearchPanel';

const Catalog = () => {
  return (
    <>
      <Stack.Screen options={{ title: `Catalog` }} />
      <SafeAreaView>
        <SearchPanel onChangeText={() => {}} />
        <CoffeeCatalog items={db} onItemSelect={() => {}} />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
