import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from './src/store/ducks/store/configureStore';

import { StatusBar, View } from 'react-native';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Router from 'navigation/stackNavigator';

// const store = configureStore();
class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Solomon-Sans-Normal': {
        uri: require('assets/fonts/Solomon-Sans-Normal.ttf'),
      },
      'Solomon-Sans-SemiBold': {
        uri: require('assets/fonts/Solomon-Sans-SemiBold.ttf'),
      },
    });
    await Asset.loadAsync([]), this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <>
        {/* <Provider store={store}> */}
          <StatusBar hidden />
          <Router />
        {/* </Provider> */}
      </>
    ) : (
      <View />
    );
  }
}

export default App;
