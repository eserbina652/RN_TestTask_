import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, ParamListBase} from '@react-navigation/native';
import {ScreenName} from '../constants';

export type Nullable<T> = T | null;

export type NavigationProp<
  StackParams extends ParamListBase,
  CurrentScreen extends string,
> = CompositeNavigationProp<
  StackNavigationProp<StackParams, CurrentScreen>,
  StackNavigationProp<StackNavigation>
>;

export type StackNavigation = {
  HOME: undefined;
  POST_CREATOR: undefined;
  BOTTOM_MODAL: {id: number};
};
export const StackRoutes = {
  [ScreenName.HOME]: ScreenName.HOME,
  [ScreenName.POST_CREATOR]: ScreenName.POST_CREATOR,
  [ScreenName.BOTTOM_MODAL]: ScreenName.BOTTOM_MODAL,
};
