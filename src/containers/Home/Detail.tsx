import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  WebView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, NavigationInjectedProps } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import { IVideoStore } from '../../stores/Video';
import Video from 'react-native-video';
import TouchableWithFeedback from '../../components/common/TouchableWithFeedback';
import styles from '../../styles/home/detail';
// import html from ''

interface IProps extends NavigationInjectedProps {
  video: IVideoStore;
}

@inject('video')
@observer
export default class Detail extends Component<IProps> {
  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item', {});
    return {
      headerTitle: item && item.title,
      // header: null,
    };
  };

  player = null;

  webview = null;

  state = {
    item: null,
  };

  componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    this.setState({ item });
  }

  videoError = (e: any) => {
    console.log(e);
  };

  handleLoad = () => {
    const { item } = this.state;
    if (this.webview != null && item != null) {
      const params = {
        src: item.embedded_url,
      };
      this.webview.postMessage(JSON.stringify(params));
    }
  };

  rederLoading = () => (
    <ActivityIndicator animating color="#1BAF8F" size="large" />
  );

  render() {
    const { video } = this.props;
    const { item } = this.state;
    return (
      <SafeAreaView style={styles.contain}>
        <WebView
          // style={styles.webView}
          ref={ref => (this.webview = ref)}
          // source={{ uri: (item && item.embedded_url) || '' }}
          source={require('./video.html')}
          // startInLoadingState
          // onLoadStart={this.handleStart}
          renderLoading={this.rederLoading}
          onLoadEnd={this.handleLoad}
          // onNavigationStateChange={this.onNavigationStateChange}
        />
        {/* <Video
          controls
          source={{
            uri:
            // 'https://ip51437329.cdn.qooqlevideo.com/key=Y22yfxZyDTjy4-KQqA+iag,s=,end=1546601009,limit=2/data=1546601009/state=ypDB/referer=force,.avgle.com/reftag=56109644/media=hlsA/25/177/7/136029587.m3u8',
            // 'https://cdn.846u.com/26/2018/11/WJBsHc3v/hls/WJBsHc3v.m3u8',
            'https://cdn.846u.com/26/2018/11/SGQYsCRv/hls/SGQYsCRv.m3u8',
            // 'https://ip107309180.cdn.qooqlevideo.com/key=xPklhWixr0t5zwj4+82b5Q,s=,end=1546601359,limit=2/data=1546601359/state=dz4c/referer=force,.avgle.com/reftag=56109644/media=hlsA/30/177/6/73008916.m3u8',
              // 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
            // 'https://ip110123427.cdn.qooqlevideo.com/key=3ssTGFu3paU15dAsMnLVAA,s=,end=1546597229,limit=2/data=1546597229/state=dz4c/referer=force,.avgle.com/reftag=56109644/media=hlsA/ssd6/177/3/135820593.m3u8'
            // 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
            // 'https://ip110123427.cdn.qooqlevideo.com/key=3ssTGFu3paU15dAsMnLVAA,s=,end=1546597229,limit=2/data=1546597229/state=dz4c/referer=force,.avgle.com/reftag=56109644/media=hlsA/ssd6/177/3/135820593.mp4/seg-2-v1-a1.ts'
            // (item && item.embedded_url) ||
            // 'https://static-clst.avgle.com/videos/tmb8/259017/preview.mp4',
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          bufferConfig={{
            minBufferMs: 15000,
            maxBufferMs: 50000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000,
          }}
          fullscreenAutorotate
        /> */}
      </SafeAreaView>
    );
  }
}
