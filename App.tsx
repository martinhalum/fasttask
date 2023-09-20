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
import AppProvider from 'providers/Appprovider/AppProvider';

const Navigation = () => {
  return (
    <AppProvider>
      <DateProvider>
        <NavigationContainer>
          <StatusBar />
          <StackNavigation />
        </NavigationContainer>
      </DateProvider>
    </AppProvider>
  );
};

function App(): JSX.Element {
  return <Navigation />;
}

export default App;
