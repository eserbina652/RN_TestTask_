import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {INews} from '../../interfaces';
import News from './News';
import {Nullable} from '../../utils/types';

interface NewsListProps {
  data: Nullable<INews[]>;
}
const NewsList = ({data}: NewsListProps) => {
  return (
    <View style={styles.container}>
      {data !== null && (
        <FlatList data={data} renderItem={({item}) => <News news={item} />} />
      )}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 100,
    alignSelf: 'center',
  },
});
