import React, {useCallback} from 'react';
import {useApiContext} from '../ApiProvider';
import NewsList from '../components/home/NewsList';
import {StyleSheet, View} from 'react-native';
import Search from '../components/search/Search';
import {useFocusEffect} from '@react-navigation/native';

const Home = () => {
  const {fetchData, data} = useApiContext();

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View style={styles.home}>
      <Search />
      <NewsList data={data} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {backgroundColor: '#fff'},
});
