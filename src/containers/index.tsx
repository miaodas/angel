// import { observer } from 'mobx-react/native';
import React, { Component } from "react";
import Navigator from "../navigators/index";

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <Navigator />;
  }
}
