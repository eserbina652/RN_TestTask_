import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles';

interface StandardBtnProps {
  text: string;
  disabled: boolean;
  callback: () => void;
  isModal: boolean;
}
const StandardBtn = ({text, disabled, callback, isModal}: StandardBtnProps) => {
  return (
    <TouchableOpacity
      onPress={callback}
      disabled={isModal && disabled}
      style={[styles.btn, disabled ? styles.disabled : styles.active]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default StandardBtn;
const styles = StyleSheet.create({
  btn: {borderRadius: 10, width: 360, paddingVertical: 14, textAlign: 'center'},
  active: {backgroundColor: Colors.ACTIVE},
  disabled: {backgroundColor: Colors.DISABLED},
});
