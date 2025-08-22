import React from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { Colors, FontSize, Radius } from '../shared/tokens';

export const SearchPanel = ({
  containerStyles,
  onSearch,
}: {
  containerStyles?: ViewStyle;
  onSearch: () => void;
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyles }}>
      <TextInput
        style={styles.input}
        placeholder="Найти кофе"
        placeholderTextColor={Colors.GreyText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.Black100 },
  input: {
    backgroundColor: Colors.BlackLight,
    margin: 30,
    height: 52,
    borderRadius: Radius._16,
    padding: 17,
    color: Colors.GreyText,
    fontSize: FontSize._14,
  },
});
