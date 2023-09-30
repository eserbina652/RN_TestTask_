import React from 'react';
import {TextInput, View} from 'react-native';
import SearchSvg from '../assets/svg/SearchSvg';
import CircleBtn from './btns/CircleBtn';
import AddSvg from '../assets/svg/AddSvg';

interface CustomInputProps {
  placeholder: string;
  inputValue?: string;
  onChange: (key: string, text: string) => void;
}
const CustomInput = ({placeholder, inputValue, onChange}: CustomInputProps) => {
  const onAddNews = () => {};
  return (
    <View>
      <View>
        <SearchSvg />
        <TextInput
          placeholder={placeholder}
          value={inputValue}
          //@ts-ignore
          onChange={text => onChange(text)}
        />
      </View>
      <View>
        <CircleBtn callback={onAddNews} svg={<AddSvg />} />
      </View>
    </View>
  );
};

export default CustomInput;
