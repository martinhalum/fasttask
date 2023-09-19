import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '@pages/HomePage';

import {PropsType} from './types';

const Stack = createStackNavigator();

const StackNavigation = ({}: PropsType) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <Stack.Screen name="HomePage" component={HomePage} />
  </Stack.Navigator>
);

export default StackNavigation;
