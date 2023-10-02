import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import SearchSvg from '../../assets/svg/SearchSvg';
import {InputProps} from './interface';
import fonts from '../../assets/fonts';

const CustomInput = ({
  placeholder,
  inputValue,
  onChange,
  style = null,
  isSearch = false,
}: InputProps) => {
  return (
    <View style={styles.container}>
      {isSearch && <SearchSvg />}
      <TextInput
        style={[styles.text_light, style]}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChange}
      />
    </View>
  );
};

export default CustomInput;

export const styles = StyleSheet.create({
  text_light: {
    fontFamily: fonts.RobotoLight,
    fontSize: 16,
    lineHeight: 16,
    color: '#8E949A',
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
