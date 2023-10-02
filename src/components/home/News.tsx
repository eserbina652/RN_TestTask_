import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {INews} from '../../interfaces';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../constants';
import {Colors} from '../../styles';
import fonts from '../../assets/fonts';

interface NewsProps {
  news: INews;
}
const News = ({news}: NewsProps) => {
  const navigation = useNavigation();
  let updatingTime: string;

  const openModal = () => {
    // @ts-ignore
    navigation.navigate(ScreenName.BOTTOM_MODAL, {id: news.id});
  };
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
    <TouchableOpacity style={styles.container} onPress={openModal}>
      <Image style={styles.image} source={{uri: news.image}} />
      <View style={styles.text_container}>
        <Text style={styles.title_semobold}>{news.title}</Text>
        <Text style={styles.text_light}>{news.text}</Text>
        <Text style={styles.timeAgo_extraLight}>
          {calculateTimeSince(news.updated_at || news.created_at)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default News;

const styles = StyleSheet.create({
  image: {
    height: 195,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    marginBottom: 35,
    width: 350,
    height: 304,
    borderRadius: 10,
  },
  text_container: {
    width: '100%',
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: '#fff',
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 39,
    paddingBottom: 19,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title_semobold: {
    fontFamily: fonts.RobotoBold,
    fontSize: 20,
    lineHeight: 23,
    color: '#000',
  },
  text_light: {
    fontFamily: fonts.RobotoLight,
    fontSize: 16,
    lineHeight: 16,
    color: '#000',
    marginTop: 10,
    marginBottom: 5,
  },
  timeAgo_extraLight: {
    fontFamily: fonts.RobotoThin,
    fontSize: 12,
    lineHeight: 17,
    color: '#8E949A',
  },
});
