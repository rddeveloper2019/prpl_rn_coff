import { SafeAreaView, View } from 'react-native';
import { AppText } from '../../shared/AppText';
import React from 'react';
import { Stack } from 'expo-router';
import { Coffee } from '../../entities/coffee/ui/Coffee';
import {
  CoffeeType,
  CoffeeTypes,
} from '../../entities/coffee/model/coffee.model';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { db } from '../../entities/coffee/model/coffee..state';
import { SearchPanel } from '../../widgets/SearchPanel';

const Catalog = () => {
  return (
    <>
      <Stack.Screen options={{ title: `Catalog` }} />
      <SafeAreaView>
        <SearchPanel onSearch={() => {}} />
        <CoffeeCatalog items={db} onItemSelect={() => {}} />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
