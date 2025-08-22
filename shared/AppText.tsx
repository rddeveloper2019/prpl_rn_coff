import { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors, FontFamily, FontSize } from './tokens';
import React from 'react';
import { cn } from './utils';

export const AppText = ({
  children,
  style,
  ...props
}: PropsWithChildren<TextProps> & { style?: any }) => {
  return (
    <Text {...props} style={cn(styles.text, style)}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize._16,
    fontFamily: FontFamily.SoraRegular,
    color: Colors.White,
  },
});
