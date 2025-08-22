import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { db } from '../../entities/coffee/model/coffee..state';
import { SearchInput } from '../../shared/SearchInput';
import { CoffeeFilter } from '../../widgets/CoffeeFilter';
import useDebounce from '../../shared/hooks';
const Catalog = () => {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <SafeAreaView>
        <SearchInput placeholder="Найти кофе" onChangeText={setSearch} />
        <CoffeeFilter onSelect={(v) => setType(v)} value={type} />
        <CoffeeCatalog items={db} onItemSelect={console.log} />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
