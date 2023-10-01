import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles';
import {Nullable} from '../../utils/types';
import fonts from '../../assets/fonts';

interface IStyle {
  backgroundColor?: string;
  marginTop?: number;
}
interface StandardBtnProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  style?: Nullable<IStyle>;
}
const StandardBtn = ({
  title,
  disabled = false,
  onPress,
  style = null,
}: StandardBtnProps) => {
  const btnStyle = disabled ? styles.disabled : styles.active;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.btn, disabled ? btnStyle : style]}>
      <Text style={styles.text_bold}>{title}</Text>
    </TouchableOpacity>
  );
};
export default StandardBtn;
const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    width: 360,
    // height: 80,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: Colors.ACTIVE,
  },
  active: {opacity: 1},
  disabled: {opacity: 0.5},
  text_bold: {
    fontFamily: fonts.RobotoBold,
    fontSize: 24,
    lineHeight: 35,
    color: '#fff',
  },
});
