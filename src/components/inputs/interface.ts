import {ViewStyle} from 'react-native';
import {Nullable} from '../../utils/types';

export interface InputProps {
  placeholder: string;
  inputValue: string;
  onChange: (text: string) => void;
  style?: Nullable<ViewStyle>;
  isSearch?: boolean;
}
