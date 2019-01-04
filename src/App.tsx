import React from 'react';
import { observer, Provider } from 'mobx-react/native';
import Container from './containers';
// import * as stores from './stores';
import { createStore } from './stores';

@observer
export default class App extends React.Component {
  state = {
    store: null,
  };

  componentWillMount() {
    this.initApp();
  }

  initApp = async () => {
    const store = await createStore();
    this.setState({
      store,
    });
    return true;
  };

  render() {
    const { store } = this.state;
    return (
      store && (
        <Provider {...store}>
          <Container />
        </Provider>
      )
    );
  }
}
