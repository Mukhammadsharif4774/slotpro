import {Dimensions} from 'react-native';

export const COLORS = {
  black: '#000000',
  white: '#ffffff',
  main: '#48B675',
  background: '#F5ACB0',
  cardBackground: '#ffffff',
  inputBackground: '#EDEDED',
  inactiveBackground: 'rgba(0, 255, 41, 0.3)',
};

export const FONTS = {
  black: 'Montserrat-Black',
  bold: 'Montserrat-Bold',
  extraBold: 'Montserrat-ExtraBold',
  italic: 'Montserrat-Italic',
  light: 'Montserrat-Light',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
  semiBold: 'Montserrat-SemiBold',
  thin: 'Montserrat-Thin',
};

export const {width, height} = Dimensions.get('window');
