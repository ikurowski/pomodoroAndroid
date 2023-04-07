import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import store from './src/app/store';
import {colors} from './src/styles/styles';
import {Navigation as N} from 'react-native-navigation';

function App() {
  N.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.secondary,
      style: 'light',
    },
  });
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar
          backgroundColor={colors.secondary}
          barStyle={'light-content'}
        />
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
