import { Alert, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { CoffeeCatalog } from '../../widgets/CoffeeCatalog';
import { loadCoffees } from '../../entities/coffee/model/coffee.state';
import { SearchInput } from '../../shared/SearchInput';
import { CoffeeFilter } from '../../widgets/CoffeeFilter';
import useDebounce from '../../shared/hooks';
import { useAtom } from 'jotai';
const Catalog = () => {
  const [type, setType] = useState('');
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text);
  const debouncedType = useDebounce(type);
  const [{ coffees, isLoading, error }, searchCoffee] = useAtom(loadCoffees);

  useEffect(() => {
    searchCoffee({
      type: debouncedType.trim().toLowerCase(),
      text: debouncedText.trim().toLowerCase(),
    });
  }, [debouncedText, debouncedType]);

  useEffect(() => {
    if (error) {
      Alert.alert('Ошибка!', error, [
        {
          text: 'Всё равно',
          style: 'destructive',
          onPress: () => {},
        },
      ]);
    }
  }, [error]);
  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <SafeAreaView>
        <SearchInput placeholder="Найти кофе" onChangeText={setText} />
        <CoffeeFilter onSelect={(v) => setType(v)} value={type} />
        <CoffeeCatalog
          items={coffees || []}
          onItemSelect={console.log}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </>
  );
};

export default Catalog;
