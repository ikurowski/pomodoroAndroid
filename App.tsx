import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/app/store';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
