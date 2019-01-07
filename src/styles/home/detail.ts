import { StyleSheet } from 'react-native';
import colors from '../colors';
import V from '../theme/index';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  backgroundVideo: {
    width: V.width,
    height: 250,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});

export default styles;
