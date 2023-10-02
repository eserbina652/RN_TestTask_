import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AreaSignSvg from '../../assets/svg/AreaSignSvg';
import {InputProps} from './interface';
import fonts from '../../assets/fonts';
import {Colors} from '../../styles';

const TextArea = ({placeholder, inputValue, onChange}: InputProps) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChange}
        style={styles.text_light}
        multiline={true}
        numberOfLines={3}
      />
      <View style={styles.img}>
        <AreaSignSvg />
      </View>
    </View>
  );
};

export default TextArea;

export const styles = StyleSheet.create({
  text_light: {
    fontFamily: fonts.RobotoLight,
    fontSize: 16,
    lineHeight: 16,
    color: '#8E949A',
    justifyContent: 'flex-start',
    marginLeft: 25,
  },
  input: {
    backgroundColor: Colors.MAIN,
    borderRadius: 10,
    paddingBottom: 10,
  },
  img: {
    alignItems: 'flex-end',
    paddingRight: 7,
    paddingTop: 60,
  },
});
