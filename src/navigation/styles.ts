import {StyleSheet} from 'react-native';
import {colours} from '@theme';
import {vh, vw} from '@utils';

const styles = StyleSheet.create({
  headerStyle: {
    height: vh * 12,
    backgroundColor: colours.black,
  },
  headerRightContainer: {
    paddingRight: 8 * vw,
    justifyContent: 'center',
  },
  headerTitleContainer: {
    width: vw * 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleImage: {
    height: vh * 6,
    width: vw * 40,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  iconBtnContainer: {
    width: vh * 8,
    height: vh * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: vh * 3,
    height: vh * 3,
    resizeMode: 'contain',
    tintColor: colours.white,
  },
  profileImage: {
    width: vh * 3,
    height: vh * 3,
    resizeMode: 'contain',
  },
  textButton: {
    marginLeft: vw * 2,
  },
});

export default styles;
