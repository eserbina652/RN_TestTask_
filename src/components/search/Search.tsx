import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CircleBtn from '../btns/CircleBtn';
import AddSvg from '../../assets/svg/AddSvg';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../constants';
import {Colors} from '../../styles';
import CustomInput from '../inputs/CustomInput';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');

  const onAddNews = () => {
    // @ts-ignore
    navigation.navigate(ScreenName.POST_CREATOR);
  };
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <CustomInput
          isSearch={true}
          inputValue={searchText}
          placeholder="Search"
          onChange={text => setSearchText(text)}
        />
      </View>
      <CircleBtn callback={onAddNews} svg={<AddSvg />} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    margin: 30,
  },
  input_container: {
    backgroundColor: Colors.MAIN,
    borderRadius: 10,
    width: '84%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
