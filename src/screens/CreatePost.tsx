import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomInput from '../components/inputs/CustomInput';
import StandardBtn from '../components/btns/StandardBtn';
import {Colors} from '../styles';
import {useApiContext} from '../ApiProvider';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../constants';
import TextArea from '../components/inputs/TextArea';

const CreatePost = () => {
  const {postData} = useApiContext();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    url: '',
  });
  const handleSubmit = () => {
    postData(formData);
    // @ts-ignore
    navigation.navigate(ScreenName.HOME);
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomInput
          placeholder="Title*"
          onChange={text => setFormData({...formData, title: text})}
          inputValue={formData.title}
          style={styles.inputStyles}
        />
        <CustomInput
          placeholder="Image url"
          onChange={text => setFormData({...formData, image: text})}
          inputValue={formData.image}
          style={styles.inputStyles}
        />
        <CustomInput
          placeholder="Link"
          onChange={text => setFormData({...formData, url: text})}
          inputValue={formData.url}
          style={styles.inputStyles}
        />
        <TextArea
          placeholder="Type your message here..*"
          onChange={text => setFormData({...formData, text: text})}
          inputValue={formData.text}
        />
      </View>
      <StandardBtn
        title="Public"
        onPress={handleSubmit}
        disabled={
          !(
            formData.title.length &&
            formData.text.length &&
            formData.image.length &&
            formData.url.length
          )
        }
      />
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#fff',
  },
  inputStyles: {
    height: 60,
    backgroundColor: Colors.MAIN,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  areaStyle: {
    backgroundColor: Colors.MAIN,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 30,
    marginBottom: 25,
  },
});
