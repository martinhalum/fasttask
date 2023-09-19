/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/stack';
import DateProvider from 'providers/DateProvider';

const Navigation = () => {
  return (
    <DateProvider>
      <NavigationContainer>
        <StatusBar />
        <StackNavigation />
      </NavigationContainer>
    </DateProvider>
  );
};

function App(): JSX.Element {
  return <Navigation />;
}

export default App;
