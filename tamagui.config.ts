import {createFont, createTamagui, createTokens} from 'tamagui';
import {space, size, radius, zIndex, color, lightColors} from '@tamagui/themes';
import {createAnimations} from '@tamagui/animations-react-native';

export const animations = createAnimations({
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
});

const montserrat = createFont({
  family: 'Montserrat',
  size: {
    ...size,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
  },
  weight: {
    4: '300',
    6: '600',
    bold: '900',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
  face: {
    100: {normal: 'Montserrat-Light', italic: 'Montserrat-LightItalic'},
    200: {normal: 'Montserrat-Light', italic: 'Montserrat-LightItalic'},
    300: {normal: 'Montserrat-Light', italic: 'Montserrat-LightItalic'},
    400: {normal: 'Montserrat-Regular', italic: 'Montserrat-Italic'},
    500: {normal: 'Montserrat-Medium', italic: 'Montserrat-MediumItalic'},
    600: {normal: 'Montserrat-SemiBold', italic: 'Montserrat-SemiBoldItalic'},
    700: {normal: 'Montserrat-SemiBold', italic: 'Montserrat-SemiBoldItalic'},
    800: {normal: 'Montserrat-Bold', italic: 'Montserrat-BoldItalic'},
    900: {normal: 'Montserrat-Bold', italic: 'Montserrat-BoldItalic'},
  },
});

const tokens = createTokens({
  color: {
    ...color,
    primary: '#CD3438',
  },
  space,
  size: {
    ...size,
  },
  radius,
  zIndex,
});

export default createTamagui({
  tokens,
  themes: {
    light: {
      background: '#fff',
      color: '#161617',
      ...lightColors,
    },
  },
  fonts: {body: montserrat, montserrat},
  animations,
});
