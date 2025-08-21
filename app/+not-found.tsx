import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { Colors, FontSize, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button';
import { AppText } from '../shared/AppText';

const NotFound = () => {
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bg.png')}
        style={styles.background}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

      <View
        style={[styles.content, { paddingTop: top, paddingBottom: bottom }]}
      >
        <View style={styles.iconContainer}>
          <AppText style={styles.icon}>☕</AppText>
        </View>

        <AppText style={styles.title}>Страница не найдена</AppText>
        <AppText style={styles.subtitle}>Кажется, вы забрели не туда…</AppText>

        <Button
          text="Вернуться на главную"
          onPress={() => router.back()}
          style={{ paddingHorizontal: 30 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: Gaps._24,
    zIndex: 1,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.Brown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: FontSize._34,
    fontWeight: 'bold',
    color: Colors.White,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FontSize._16,
    color: Colors.Grey,
    textAlign: 'center',
  },
});

export default NotFound;
