import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, FontSize, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button';
import { AnimatedTitle } from '../shared/AnimatedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../shared/AppText';
import { Link, router } from 'expo-router';

const Intro = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ ...styles.image, height }}
      resizeMode="cover"
      imageStyle={{ height: height * 0.8 }}
    >
      <SafeAreaView>
        <View style={{ ...styles.content }}>
          <View style={styles.intro}>
            <Link href={'/catalog/10'} style={{ color: 'white' }}>
              Catalog 10
            </Link>
            <Link href={'/success'} style={{ color: 'white' }}>
              Success
            </Link>
            <Link href={'/cart'} style={{ color: 'white' }}>
              Cart
            </Link>
            <Link href={'/address'} style={{ color: 'white' }}>
              Address
            </Link>
            <Link href={'/addfferferfess'} style={{ color: 'white' }}>
              Not Found
            </Link>
            <AnimatedTitle text="Одно из самых вкусных кофе в городе!" />
            <AppText style={styles.description}>
              Свежие зёрна, настоящая арабика и бережная обжарка
            </AppText>
          </View>

          <Button text="Начать" onPress={() => router.replace('/catalog')} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },

  content: {
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    gap: Gaps._24,
    paddingHorizontal: 30,
    height: '100%',
  },
  intro: { alignItems: 'center', justifyContent: 'center' },
  description: {
    color: Colors.Grey,
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: FontSize._14,
  },
  image: {
    position: 'absolute',
    top: 0,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
});

export default Intro;
