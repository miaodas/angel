import React, { Component } from 'react';
import { View, FlatList, Text, ImageBackground } from 'react-native';
import { SafeAreaView, NavigationInjectedProps } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import Placeholder from 'rn-placeholder';
import { IVideoStore } from '../../stores/Video';
import TouchableWithFeedback from '../../components/common/TouchableWithFeedback';
import styles from '../../styles/home/list';
import moment from 'moment';

interface IProps extends NavigationInjectedProps {
  video: IVideoStore;
}

@inject('video')
@observer
export default class List extends Component<IProps> {
  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam('name', '');
    return {
      headerTitle: name,
      // header: null,
    };
  };

  state = {
    isReady: false,
  };

  componentWillMount() {
    this.fetchVideos();
  }

  fetchVideos = async () => {
    const { video, navigation } = this.props;
    const c = navigation.getParam('c', 1);
    try {
      const respon = await video.getVideos({ c, page: 0 });
      console.log(respon);
      this.setOnLoad();
    } catch (error) {
      console.log(error);
    }
  };

  setOnLoad = () => {
    this.setState({
      isReady: true,
    });
  };

  openDetail = item => {
    const { navigation } = this.props;
    navigation.navigate('Detail', {
      item,
    });
  };

  genarateKey = (_: any, index: number) => `list-${index}`;

  renderItem = ({ item }: { item: any }) => (
    <TouchableWithFeedback
      style={styles.itemView}
      onPress={() => this.openDetail(item)}
    >
      <View style={styles.imageView}>
        <Placeholder.Media size={150} color="#0000ff" onReady={this.state.isReady}>
          <ImageBackground
            style={styles.image}
            source={{
              uri:
                'http://5b0988e595225.cdn.sohucs.com/images/20170813/f13f0109e3634bdeb889a0ba0be375d0.png',
            }}
            // source={{
            //   uri: (item && item.preview_url) || '',
            // }}
            resizeMode="cover"
          >
            <View style={styles.duration}>
              <Text style={styles.durationText}>
                {moment(item.duration * 1000)
                  .utcOffset(0)
                  .format('HH:mm:ss')}
              </Text>
            </View>
          </ImageBackground>
        </Placeholder.Media>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.fromNow}>
            {moment(item.addtime * 1000).fromNow()}
          </Text>
          <Text style={styles.count}>{item.viewnumber} views</Text>
        </View>
        <View>
          <Text>{item.likes} likes</Text>
        </View>
      </View>
    </TouchableWithFeedback>
  );

  endReached = async () => {
    const { video, navigation } = this.props;
    const c = navigation.getParam('c', 1);
    try {
      const respon = await video.getVideos({ c });
      console.log('ssss');
      console.log(respon);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { video } = this.props;
    console.log(this.props.navigation);
    return (
      <SafeAreaView style={styles.contain}>
        <FlatList
          showsVerticalScrollIndicator={false}
          // numColumns={2}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<View style={styles.listHeader} />}
          // refreshControl={refreshControl}
          // ListFooterComponent={() => this.renderFooter()}
          onEndReached={this.endReached}
          data={video.videos}
          keyExtractor={this.genarateKey}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}
