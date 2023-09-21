import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '@pages/HomePage';
import DetailPage from '@pages/DetailPage';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="DetailPage" component={DetailPage} />
  </Stack.Navigator>
);

export default StackNavigation;
