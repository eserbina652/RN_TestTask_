import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

interface CircleBtnProps {
  callback: () => void;
  svg: ReactNode;
}
const CircleBtn = ({callback, svg}: CircleBtnProps) => {
  return <TouchableOpacity onPress={callback}>{svg}</TouchableOpacity>;
};

export default CircleBtn;
