import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, FontSize, Radius } from "./tokens";

export const Button = ({
  text,
  ...props
}: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
    borderRadius: Radius._12,
    backgroundColor: Colors.Brown,
  },
  text: { color: Colors.White, fontSize: FontSize._16, fontWeight: 600 },
});
