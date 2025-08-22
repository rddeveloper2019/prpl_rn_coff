import React from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { Colors, FontSize, Radius } from '../shared/tokens';
import Svg, { Path } from 'react-native-svg';

export const SearchInput = ({
  containerStyles,
  onChangeText,
  placeholder,
}: {
  containerStyles?: ViewStyle;
  onChangeText: () => void;
  placeholder: string;
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyles }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.GreyText}
          onChangeText={onChangeText}
        />
        <Svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          style={styles.icon}
        >
          <Path
            d="M9.583 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM18.333 18.333l-1.666-1.666"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.Black100 },
  inputContainer: {
    position: 'relative',
    backgroundColor: Colors.BlackLight,
    marginVertical: 30,
    marginHorizontal: 'auto',
    height: 52,
    width: 315,
    borderRadius: Radius._16,

    fontSize: FontSize._14,
  },

  input: { padding: 17, color: Colors.GreyText, paddingLeft: 48 },
  icon: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});
