import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../styles';

interface CircleBtnProps {
  onPress: () => void;
  svg: ReactNode;
}
const CircleBtn = ({onPress, svg}: CircleBtnProps) => {
  return (
    <View style={styles.btn_container}>
      <TouchableOpacity onPress={onPress}>{svg}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_container: {
    padding: 8,
    backgroundColor: Colors.MAIN,
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleBtn;
