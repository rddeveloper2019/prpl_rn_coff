import { registerRootComponent } from "expo";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={styles.description}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
        </View>
        <Button title="Начать" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 45,
    backgroundColor: "#000000",
  },
  content: { alignItems: "stretch", justifyContent: "center", gap: 24 },
  intro: { alignItems: "center", justifyContent: "center", gap: 8 },
  title: {
    fontWeight: 600,
    fontSize: 34,
    lineHeight: 43,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#FFFFFF",
  },
  description: { color: "#A9A9A9", textAlign: "center", paddingHorizontal: 30 },
});

registerRootComponent(App);
