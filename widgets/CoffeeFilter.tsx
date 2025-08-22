import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from '../shared/Chip';
import { Colors } from '../shared/tokens';
export const CoffeeFilter = ({
  value = '',
  onSelect,
}: {
  onSelect: (v: string) => void;
  value: string;
}) => {
  return (
    <View style={styles.filter}>
      <Chip
        text={'Все'}
        value={value}
        onClick={() => onSelect('')}
        selected={value === ''}
      />
      <Chip
        text={'Капучино'}
        value={value}
        onClick={() => onSelect('cappuccino')}
        selected={value === 'cappuccino'}
      />
      <Chip
        text={'Латте'}
        value={value}
        onClick={() => onSelect('latte')}
        selected={value === 'latte'}
      />
      <Chip
        text={'Маккиято'}
        value={value}
        onClick={() => onSelect('macchiato')}
        selected={value === 'macchiato'}
      />
      <Chip
        text={'Американо'}
        value={value}
        onClick={() => onSelect('americano')}
        selected={value === 'americano'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    backgroundColor: Colors.PrimaryBg,
    paddingHorizontal: 30,
    paddingTop: 28,
    gap: 8,
  },
});
