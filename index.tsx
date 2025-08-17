import { registerRootComponent } from "expo";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, FontSize, Gaps } from "./shared/tokens";
import { Button } from "./shared/Button";
import { AnimatedTitle } from "./shared/AnimatedText";

function App() {
  const height = Dimensions.get("screen").height;
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/bg.png")}
          style={{ ...styles.image, height: height * 0.8 }}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <View style={styles.intro}>
              <AnimatedTitle text="Одно из самых вкусных кофе в городе!" />
              <Text style={styles.description}>
                Свежие зёрна, настоящая арабика и бережная обжарка
              </Text>
            </View>
            <Button text="Начать" />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    paddingBottom: 55,
    backgroundColor: Colors.Black100,
    height: "100%",
  },
  content: {
    alignItems: "stretch",
    justifyContent: "flex-end",
    gap: Gaps._24,
    height: "100%",
    paddingHorizontal: 30,
  },
  intro: { alignItems: "center", justifyContent: "center" },
  description: {
    color: Colors.Grey,
    textAlign: "center",
    paddingHorizontal: 30,
    fontSize: FontSize._14,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

registerRootComponent(App);
