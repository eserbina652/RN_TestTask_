import React from 'react';
import {View} from 'react-native';

const App = () => {
  return <View />;
};

export default App;

/*
REQUIRED:
Todo: directories structure
Todo: stackNavigator(
 homePage: API/GET Method;
 createNewsPage: form, notActive btns before all data won't complete,
                 API/POST Method;
 modalPage: API/DELETE Method)
Todo: design for all pages
Todo: API request
Todo: search: if the field is empty - nothing will change,
              if the letter is there - filtered the result
              and show filtered array instead of all news,
              if nothing found - show the picture from figma.

THEN:
Todo: AsyncStorage: reload if the internet is present,
                    if no - show the latest save
Todo: Refresh Loading - FlatList has onRefresh - loading props
Todo: Splash Screen
*/
