import React, { ReactNode } from 'react';
import ReactPropTypes from 'prop-types';
import {
  TouchableNativeFeedback,
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
  },
});
// const pressColor = 'rgba(0, 0, 0, .32)';
// function if (Platform['Version'] >= 21) {
//   background = TouchableNativeFeedback.Ripple(props.backgroundColor);
// } else {
//   background = TouchableNativeFeedback.SelectableBackground();
// }
/* eslint-disable dot-notation */
const isBackground =
  Platform.Version >= 21
    ? TouchableNativeFeedback.SelectableBackgroundBorderless()
    : TouchableNativeFeedback.SelectableBackground();

const TouchableWithFeedback = ({
  children,
  ...rest
}: {
  children: ReactNode;
}) => (
  <View style={styles.container}>
    <TouchableNativeFeedback {...rest} background={isBackground}>
      <View {...rest}>{children}</View>
    </TouchableNativeFeedback>
  </View>
);

TouchableWithFeedback.propTypes = {
  children: ReactPropTypes.node.isRequired,
};

export default TouchableWithFeedback;
