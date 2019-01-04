import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView, NavigationInjectedProps } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import { IVideoStore } from '../../stores/Video';
import TouchableWithFeedback from '../../components/common/TouchableWithFeedback';
import styles from '../../styles/home/detail';

interface IProps extends NavigationInjectedProps {
  video: IVideoStore;
}

@inject('video')
@observer
export default class Detail extends Component<IProps> {
  static navigationOptions = {
    // headerTitle: name,
    header: null,
  };

  componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    console.log(item);
  }

  render() {
    const { video } = this.props;
    return (
      <SafeAreaView style={styles.contain}>
        <View>
          <Text>jojo</Text>
        </View>
      </SafeAreaView>
    );
  }
}
