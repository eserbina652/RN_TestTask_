import React, {useEffect} from 'react';
import {ApiProvider} from './ApiProvider';
import RootStackScreen from './navigation/StackNavigator';
import {StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ApiProvider>
      <View style={styles.app}>
        <RootStackScreen />
      </View>
    </ApiProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    flex: 1,
  },
});
