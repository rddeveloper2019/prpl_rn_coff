import { Pressable, PressableProps, StyleSheet, TextStyle } from 'react-native';
import { AppText } from './AppText';
import React from 'react';
import { Colors, FontFamily, FontSize, Radius, ShadowStyles } from './tokens';
import { cn, when } from './utils';

export const Chip = ({
  selected = false,
  text,
  value,
  onClick,
  textStyles,
  ...props
}: PressableProps & {
  selected?: boolean;
  text: string;
  value: string;
  textStyles?: TextStyle;
  onClick: (v: string) => void;
}) => {
  const combinedChipStyles = cn(
    styles.chip,
    when(selected, styles.selectedChip)
  );

  const combinedTextStyles = cn(
    styles.text,
    textStyles,
    when(selected, styles.selectedText)
  );

  return (
    <Pressable
      style={combinedChipStyles}
      {...props}
      onPress={() => {
        onClick(value);
      }}
    >
      <AppText style={combinedTextStyles}>{text}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    ...ShadowStyles.shadow,
    borderRadius: Radius._12,
    backgroundColor: Colors.White,
    alignSelf: 'flex-start',
  },
  selectedChip: { backgroundColor: Colors.Brown },
  text: { color: Colors.Primary, fontSize: FontSize._14 },
  selectedText: {
    color: Colors.White,
    fontSize: FontSize._14,
    fontWeight: 600,
    fontFamily: FontFamily.SoraSemiBold,
  },
});
