import React, { Component } from 'react';
import { View, FlatList, Text, ImageBackground } from 'react-native';
import { SafeAreaView, NavigationInjectedProps } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import { IVideoStore } from '../../stores/Video';
import TouchableWithFeedback from '../../components/common/TouchableWithFeedback';
import styles from '../../styles/home';
import V from '../../styles/theme/index';

interface IProps extends NavigationInjectedProps {
  video: IVideoStore;
}

@inject('video')
@observer
export default class Index extends Component<IProps> {
  static navigationOptions = {
    headerTitle: 'Angle',
    // header: null,
  };

  componentWillMount() {
    this.fetchCat();
  }

  fetchCat = async () => {
    const { video } = this.props;
    try {
      const respon = await video.getCat();
      console.log(respon);
    } catch (error) {
      console.log(error);
    }
  };

  openCat = (item: any) => {
    const { navigation } = this.props;
    navigation.navigate('List', {
      cat: item.CHID,
      name: item.name,
    });
  };

  genarateKey = (_: any, index: number) => `list-${index}`;

  renderItem = ({ item }: { item: any }) => (
    <TouchableWithFeedback
      style={styles.itemView}
      onPress={() => this.openCat(item)}
    >
      <ImageBackground
        style={styles.image}
        source={{
          uri:
            'http://5b0988e595225.cdn.sohucs.com/images/20170813/f13f0109e3634bdeb889a0ba0be375d0.png',
        }}
        // source={{
        //   uri: (item && item.cover_url) || '',
        // }}
        resizeMode="cover"
      >
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.name}</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.countText}>{item.total_videos}</Text>
        </View>
      </ImageBackground>
    </TouchableWithFeedback>
  );

  render() {
    const { video } = this.props;
    return (
      <SafeAreaView style={styles.contain}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          // ListHeaderComponent={<View style={styles.listHeader} />}
          // refreshControl={refreshControl}
          // ListFooterComponent={() => this.renderFooter()}
          // onEndReached={this.endReached}
          data={video.categories}
          keyExtractor={this.genarateKey}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}
