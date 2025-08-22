import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { db } from '../../entities/coffee/model/coffee..state';
import { SearchInput } from '../../shared/SearchInput';
import { Chip } from '../../shared/Chip';

const Catalog = () => {
  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <SafeAreaView>
        <SearchInput placeholder="Найти кофе" onChangeText={() => {}} />
        <Chip
          onClick={console.log}
          text="Маккиято"
          value="macchiato"
          selected
        />
        <CoffeeCatalog items={db} onItemSelect={() => {}} />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
