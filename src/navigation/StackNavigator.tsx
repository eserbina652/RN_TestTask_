import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenName} from '../constants';
import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';
import BottomModal from '../screens/BottomModal';
import NavBar from '../components/navBar/NavBar';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Group>
          <RootStack.Screen
            name={ScreenName.HOME}
            component={Home}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name={ScreenName.POST_CREATOR}
            component={CreatePost}
            options={{
              header: () => <NavBar title={'New post'} />,
              headerShown: true,
            }}
          />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            cardOverlayEnabled: true,
            presentation: 'transparentModal',
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}>
          <RootStack.Screen
            name={ScreenName.BOTTOM_MODAL}
            component={BottomModal}
            options={{gestureEnabled: true}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
