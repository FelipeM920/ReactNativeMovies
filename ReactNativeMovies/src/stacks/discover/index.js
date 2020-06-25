import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {DiscoverScreen, MovieDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

export function DiscoverStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#4a4a4a',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Stack.Screen
        component={DiscoverScreen}
        name="DiscoverScreen"
        options={{title: 'Discover'}}
      />
      <Stack.Screen component={MovieDetailsScreen} name="MovieDetailsScreen" />
    </Stack.Navigator>
  );
}
