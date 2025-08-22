import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { CoffeeType } from '../entities/coffee/model/coffee.model';
import { Coffee } from '../entities/coffee/ui/Coffee';
import { Colors } from '../shared/tokens';
import { cn } from '../shared/utils';

export const CoffeeCatalog = ({
  items,
  containerStyles,
  onItemSelect,
  isLoading = false,
}: {
  items: CoffeeType[];
  containerStyles?: ViewStyle;
  onItemSelect: (id: number) => void;
  isLoading?: boolean;
}) => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  if (isLoading) {
    return (
      <View
        style={cn(
          styles.loadingContainer,
          { height },
          { paddingTop: height / 3.5 }
        )}
      >
        <ActivityIndicator color={Colors.Primary} size={'large'} />
      </View>
    );
  }
  return (
    <View
      style={cn(styles.container, containerStyles, { maxWidth: width, height })}
    >
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

  loadingContainer: {
    alignItems: 'center',
    backgroundColor: Colors.PrimaryBg,
  },
});
