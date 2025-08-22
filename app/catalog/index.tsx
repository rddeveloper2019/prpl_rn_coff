import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { db } from '../../entities/coffee/model/coffee..state';
import { SearchInput } from '../../widgets/SearchPanel';

const Catalog = () => {
  return (
    <>
      <Stack.Screen options={{ title: `` }} />
      <SafeAreaView>
        <SearchInput onChangeText={() => {}} />
        <CoffeeCatalog items={db} onItemSelect={() => {}} />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
