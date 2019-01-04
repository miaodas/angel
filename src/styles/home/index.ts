import { StyleSheet } from 'react-native';
import colors from '../colors';
import V from '../theme/index';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: colors.backgroundGray,
  },
  itemView: {
    margin: 5,
    width: V.width - 20,
    height: 180,
    // borderRadius: 8,
  },
  image: {
    overflow: 'hidden',
    width: V.width - 20,
    height: 180,
    borderRadius: 8,
    borderWidth: 0,
    // borderColor: colors.transparent,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 6,
    height: 30,
    justifyContent: 'center',
    backgroundColor: colors.alphaBlack(0.4),
  },
  count: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 20,
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 6,
    backgroundColor: colors.blue,
  },
  countText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
  titleText: {
    fontSize: 16,
    color: colors.white,
  },
});

export default styles;
