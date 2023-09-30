import {StyleSheet} from 'react-native';
import fonts from './assets/fonts';

export const Colors = {
  MAIN: '#8E949A',
  SHADOW: '#A4A9AE26',
  DELETE: '#FF6363',
  ACTIVE: '#456EFE',
  DISABLED: '#456EFE4D',
};
export const styles = StyleSheet.create({
  bold: {fontFamily: fonts.RobotoBold, fontSize: 24, lineHeight: 35},
  semobold: {fontFamily: fonts.RobotoMedium, fontSize: 20, lineHeight: 23},
  regular: {fontFamily: fonts.RobotoRegular, fontSize: 17, lineHeight: 24},
  light: {fontFamily: fonts.RobotoLight, fontSize: 16, lineHeight: 16},
  extraLight: {fontFamily: fonts.RobotoThin, fontSize: 12, lineHeight: 17},
});
