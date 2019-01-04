import { StyleSheet } from 'react-native';
import colors from '../colors';
import V from '../theme/index';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  listHeader: {
    height: 15,
  },
  itemView: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 4,
  },
  imageView: {
    // paddingHorizontal: 5,
  },
  image: {
    overflow: 'hidden',
    width: V.width - 30,
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 0,
  },
  duration: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    height: 20,
    justifyContent: 'center',
    backgroundColor: colors.alphaBlack(0.4),
    borderRadius: 10,
    paddingHorizontal: 6,
  },
  title: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  titleText: {
    fontSize: 16,
    color: colors.blue,
  },
  bottom: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 8,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
  },
  fromNow: {
    fontSize: 14,
    color: colors.fontGray,
    marginBottom: 5,
  },
  count: {
    fontSize: 14,
    color: colors.fontGray,
  },
  durationText: {
    fontSize: 12,
    color: colors.white,
  },
  likes: {
    fontSize: 14,
    color: colors.darkBlue,
  },
});

export default styles;
