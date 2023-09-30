import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {INews} from '../../interfaces';

interface NewsProps {
  news: INews;
}
const News = ({news}: NewsProps) => {
  let updatingTime: string;
  const calculateTimeSince = (timestamp: string): string => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const timeDiff = +currentTime - +postTime;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      updatingTime = `${days} days ago`;
      return updatingTime;
    } else if (hours > 0) {
      updatingTime = `${hours} hours ago`;
      return updatingTime;
    } else if (minutes > 0) {
      updatingTime = `${minutes} mins ago`;
      return updatingTime;
    } else {
      updatingTime = `${seconds} sec ago`;
      return updatingTime;
    }
  };
  return (
    <TouchableOpacity>
      {/*@ts-ignore*/}
      <Image source={news.image} />
      <View>
        <Text>{news.title}</Text>
        <Text>{news.text}</Text>
        <Text>{calculateTimeSince(news.updated_at || news.created_at)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default News;
