import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import store from './src/app/store';
import {colors} from './src/styles/styles';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

function App() {
  useEffect(() => {
    setTransparentNavigationBar();
  }, []);

  const setTransparentNavigationBar = () => {
    changeNavigationBarColor('transparent', true);
  };

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
