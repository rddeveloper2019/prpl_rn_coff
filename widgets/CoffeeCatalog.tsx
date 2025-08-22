import React from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { CoffeeType } from '../entities/coffee/model/coffee.model';
import { Coffee } from '../entities/coffee/ui/Coffee';
import { Colors } from '../shared/tokens';

export const CoffeeCatalog = ({
  items,
  containerStyles,
  onItemSelect,
}: {
  items: CoffeeType[];
  containerStyles?: ViewStyle;
  onItemSelect: () => void;
}) => {
  const width = Dimensions.get('screen').width;
  return (
    <View style={{ ...styles.container, ...containerStyles, maxWidth: width }}>
      {items.map((c) => {
        return <Coffee key={c.id} data={c} onPress={onItemSelect} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    padding: 30,
    rowGap: 13,
    columnGap: 16,
    flexDirection: 'row',
    backgroundColor: Colors.PrimaryBg,
  },
});
