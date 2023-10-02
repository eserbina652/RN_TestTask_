import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {INews} from '../../interfaces';
import News from './News';
import {Nullable} from '../../utils/types';
import {useApiContext} from '../../ApiProvider';

interface NewsListProps {
  data: Nullable<INews[]>;
}
const NewsList = ({data}: NewsListProps) => {
  const {fetchData} = useApiContext();
  return (
    <View style={styles.container}>
      {data !== null && (
        <FlatList
          refreshing={false}
          onRefresh={fetchData}
          data={data}
          renderItem={({item}) => <News news={item} />}
        />
      )}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 108,
    alignSelf: 'center',
  },
});
