import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import { Colors, FontFamily, FontSize, Radius } from './tokens';
import { AppText } from './AppText';

export const Button = ({
  text,
  ...props
}: PressableProps & { text: string }) => {
  const animatedValue = new Animated.Value(0);
  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.Brown, Colors.BrownHovered],
  });

  const handlePressIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      duration: 100,
      toValue: 100,
      useNativeDriver: true,
    }).start();

    props.onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      duration: 100,
      toValue: 0,
      useNativeDriver: true,
    }).start();

    props.onPressOut?.(e);
  };

  return (
    <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={{ ...styles.button, backgroundColor: interpolatedValue }}
      >
        <AppText style={styles.text}>{text}</AppText>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 21,
    borderRadius: Radius._12,
  },
  text: {
    fontWeight: 600,
    fontFamily: FontFamily.SoraSemiBold,
  },
});
