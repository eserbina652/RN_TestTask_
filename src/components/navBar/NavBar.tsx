import {StyleSheet, Text, View} from 'react-native';
import CircleBtn from '../btns/CircleBtn';
import {useNavigation} from '@react-navigation/native';
import ArrowSvg from '../../assets/svg/ArrowSvg';
import fonts from '../../assets/fonts';

interface NavbarProps {
  title: string;
}
export default ({title}: NavbarProps) => {
  const navigation = useNavigation();

  return (
    <View style={[{justifyContent: 'center'}, styles.container]}>
      <CircleBtn callback={() => navigation.goBack()} svg={<ArrowSvg />} />
      <Text style={styles.title_semobold}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingRight: 170,
    textAlign: 'center',
    // height: 48,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  title_semobold: {
    fontFamily: fonts.RobotoMedium,
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '700',
    color: '#23303B',
  },
});
