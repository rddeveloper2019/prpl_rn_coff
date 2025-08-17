import React from "react";
import { Animated, StyleSheet, Text, TextProps } from "react-native";
import { Colors, FontSize, Gaps } from "./tokens";

export const AnimatedTitle = ({
  text,
  ...props
}: TextProps & { text: string }) => {
  const animatedValue = new Animated.Value(-150);
  const opacity = animatedValue.interpolate({
    inputRange: [-150, 0],
    outputRange: [0.0, 1.0],
  });

  const handleLayout = () => {
    Animated.timing(animatedValue, {
      duration: 600,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [{ translateY: animatedValue }],
        opacity: opacity,
      }}
      onLayout={handleLayout}
    >
      <Text {...props} style={styles.title}>
        {text}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 600,
    fontSize: FontSize._34,
    lineHeight: 43,
    textAlign: "center",
    letterSpacing: 0.01,
    color: Colors.White,
    marginBottom: Gaps._8,
  },
});
