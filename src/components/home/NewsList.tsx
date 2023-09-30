import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {INews} from '../../interfaces';
import News from './News';

interface NewsListProps {
  data: INews[];
}
const NewsList = ({data}: NewsListProps) => {
  return (
    <ScrollView>
      <FlatList data={data} renderItem={({item}) => <News news={item} />} />
    </ScrollView>
  );
};

export default NewsList;
