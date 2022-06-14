/**
 * @format
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GetStart from './GetStart';
import Home from './Home';

import {NavigationProps} from '../@types';

const Stack = createStackNavigator<NavigationProps>();

const Navigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStart"
        component={GetStart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
