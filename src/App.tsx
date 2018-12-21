// import { observer } from 'mobx-react/native';
import React, { Component } from "react";
import { Text, YellowBox, View } from "react-native";

YellowBox.ignoreWarnings([
  "Module RCTImageLoader",
  "Require cycle",
  "Module RCTGetui",
  "relay:check"
]);

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>tttt</Text>
      </View>
    );
  }
}
