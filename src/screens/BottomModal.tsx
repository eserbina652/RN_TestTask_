import React, {useCallback, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import StandardBtn from '../components/btns/StandardBtn';
import {Colors} from '../styles';

const BottomModal = () => {
  const navigation = useNavigation();
  const actionDone = useRef(false);
  const handleGesture = useCallback((evt: PanGestureHandlerGestureEvent) => {
    const {nativeEvent} = evt;
    if (nativeEvent.velocityY > 0 && !actionDone.current) {
      navigation.goBack();
      actionDone.current = true;
    }
  }, []);
  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <StandardBtn
            title="Delete"
            onPress={() => navigation.goBack()}
            style={{backgroundColor: Colors.DELETE, marginTop: 15}}
          />
          <StandardBtn
            title="Close"
            onPress={() => navigation.goBack()}
            style={{backgroundColor: Colors.ACTIVE, marginTop: 15}}
          />
        </View>
      </View>
    </PanGestureHandler>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
