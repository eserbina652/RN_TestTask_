import React from 'react';
import {ApiProvider} from './ApiProvider';
import RootStackScreen from './navigation/StackNavigator';
import {StyleSheet, View} from 'react-native';

const App = () => {
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
