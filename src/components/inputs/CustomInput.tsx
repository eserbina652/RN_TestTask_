import React from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import fonts from '../../assets/fonts';
import SearchSvg from '../../assets/svg/SearchSvg';
import {Nullable} from '../../utils/types';

interface CustomInputProps {
  placeholder: string;
  inputValue: string;
  onChange: (text: string) => void;
  style?: Nullable<ViewStyle>;
  isArea?: boolean;
  isSearch?: boolean;
}
const CustomInput = ({
  placeholder,
  inputValue,
  onChange,
  style = null,
  isArea = false,
  isSearch = false,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      {isSearch && <SearchSvg />}
      <TextInput
        multiline={isArea}
        numberOfLines={isArea ? 4 : 1}
        style={[styles.text_light, style]}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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

export default CustomInput;
