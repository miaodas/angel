// import { observer } from 'mobx-react/native';
import React, { Component } from 'react';
import AppNavigator from '../navigators/index';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  navigator: NavigationContainerComponent | null = null;

  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
      // </SafeAreaView>
    );
  }
}
