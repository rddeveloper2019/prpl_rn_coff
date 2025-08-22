import { StyleSheet } from 'react-native';

export const enum Colors {
  Brown = '#C67C4E',
  BrownHovered = '#A76237',
  BrownLight = '#FFF5EE',
  White = '#FFFFFF',
  Grey = '#A9A9A9',
  GreyLight = '#9B9B9B',
  GreyDark = '#8D8D8D',
  GreyText = '#989898',
  Black = '#2F2D2C',
  Black100 = '#000000',
  BlackLight = '#313131',
  Primary = '#2F4B4E',
  PrimaryBg = '#F9F9F9',
}

export const enum FontSize {
  _10 = 10,
  _12 = 12,
  _14 = 14,
  _16 = 16,
  _18 = 18,
  _34 = 34,
}
export const enum Gaps {
  _8 = 8,
  _24 = 24,
}

export const enum Radius {
  _10 = 10,
  _12 = 12,
  _16 = 16,
}
export const enum FontFamily {
  SoraRegular = 'Sora-Regular',
  SoraSemiBold = 'Sora-SemiBold',
}

export const ShadowStyles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Colors.White,
    borderRadius: 16,
  },
});
