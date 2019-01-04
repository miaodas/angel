import {
  Dimensions,
  // I18nManager,
  // PixelRatio,
  Platform,
  StyleSheet,
} from 'react-native';

const deviceOS = Platform.OS;
const { width, height } = Dimensions.get('window');
const borderWidth = StyleSheet.hairlineWidth;

export default {
  deviceOS,
  width,
  height,
  borderWidth,
};
