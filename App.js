import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          padding: 8,
        }}>
        <LottieView key={1} source={require('./blink.json')} autoPlay />
      </View>
    );
  }
}

export default App;
