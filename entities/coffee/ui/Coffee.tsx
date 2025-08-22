import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CoffeeType } from '../model/coffee.model';
import {
  Colors,
  FontFamily,
  FontSize,
  Radius,
  ShadowStyles,
} from '../../../shared/tokens';
import { AppText } from '../../../shared/AppText';
import { Button } from '../../../shared/Button';
import Svg, { Path } from 'react-native-svg';

export const Coffee = ({
  data,
  onPress,
}: {
  data: CoffeeType;
  onPress: () => void;
}) => {
  return (
    <View style={{ ...styles.container, ...ShadowStyles.shadow }}>
      <Image
        source={{
          uri: data.image,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.titleBlock}>
        <AppText style={styles.name}>{data.name}</AppText>
        <AppText style={styles.subTitle}>{data.subTitle}</AppText>
      </View>
      <View style={styles.priceBlock}>
        <AppText style={styles.price}>{data.price} P</AppText>
        <Button
          text="+"
          buttonStyles={styles.button}
          textStyles={styles.buttonText}
          onPress={onPress}
        />
      </View>
      <View style={styles.rating}>
        <Svg width={8.2} height={8.2} viewBox="0 0 10 9">
          <Path
            d="M5.72.962l.734 1.467c.1.204.367.4.592.438l1.329.22c.85.142 1.05.759.438 1.367L7.779 5.488a.905.905 0 00-.216.754l.295 1.279c.234 1.012-.304 1.404-1.2.875l-1.245-.738a.9.9 0 00-.825 0l-1.246.738c-.892.529-1.434.133-1.2-.875l.296-1.28a.905.905 0 00-.217-.753L1.188 4.454c-.609-.608-.413-1.225.437-1.366l1.33-.221a.908.908 0 00.587-.438L4.275.962c.4-.795 1.05-.795 1.446 0z"
            fill="#FBBE21"
          />
        </Svg>
        <AppText style={styles.ratingText}>{data.rating}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 4,
    backgroundColor: Colors.White,
    display: 'flex',
    width: 150,
    borderRadius: Radius._16,
  },
  image: {
    width: 141,
    height: 132,
  },
  titleBlock: {
    marginTop: 12,
    marginLeft: 12,
  },
  name: {
    color: Colors.Black,
    fontSize: FontSize._16,
    fontWeight: 600,
    fontFamily: FontFamily.SoraSemiBold,
  },
  subTitle: { color: Colors.GreyLight, fontSize: FontSize._12 },
  priceBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
  },
  button: {
    width: 32,
    height: 32,
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius._12,
  },
  price: {
    color: Colors.Primary,
    fontSize: FontSize._18,
    fontWeight: 600,
    fontFamily: FontFamily.SoraSemiBold,
  },
  buttonText: {
    width: 19,
    height: 19,
    textAlign: 'center',
    fontSize: FontSize._16,
    fontWeight: 600,
    fontFamily: FontFamily.SoraSemiBold,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12.5,
    left: 12.5,
  },
  ratingText: {
    fontSize: FontSize._10,
    fontWeight: 600,
    fontFamily: FontFamily.SoraSemiBold,
    marginLeft: 2,
  },
});
