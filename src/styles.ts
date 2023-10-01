import {StyleSheet} from 'react-native';
import fonts from './assets/fonts';

interface IColors {
  MAIN: string;
  SHADOW: string;
  DELETE: string;
  ACTIVE: string;
  DISABLED: string;
}
export const Colors: IColors = {
  MAIN: '#A4A9AE26',
  SHADOW: '#8E949A',
  DELETE: '#FF6363',
  ACTIVE: '#456EFE',
  DISABLED: '#456EFE4D',
};
export const styles = StyleSheet.create({
  bold: {fontFamily: fonts.RobotoBold, fontSize: 24, lineHeight: 35},
  semobold: {fontFamily: fonts.RobotoMedium, fontSize: 20, lineHeight: 23},
  regular: {fontFamily: fonts.RobotoRegular, fontSize: 17, lineHeight: 24},
  light: {
    fontFamily: fonts.RobotoLight,
    fontSize: 16,
    lineHeight: 16,
    color: '#8E949A',
  },
  extraLight: {
    fontFamily: fonts.RobotoThin,
    fontSize: 12,
    lineHeight: 17,
    color: '#8E949A',
  },
});
