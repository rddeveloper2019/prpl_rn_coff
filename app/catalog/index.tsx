import { SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { db } from '../../entities/coffee/model/coffee..state';
import { SearchInput } from '../../shared/SearchInput';
import { Chip } from '../../shared/Chip';
import { CoffeeFilter } from '../../widgets/CoffeeFilter';
import { TokenFlags } from 'typescript';

const Catalog = () => {
  const [type, setType] = useState('');
  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <SafeAreaView>
        <SearchInput placeholder="Найти кофе" onChangeText={() => {}} />
        <CoffeeFilter onSelect={(v) => setType(v)} value={type} />
        <CoffeeCatalog items={db} onItemSelect={console.log} />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
