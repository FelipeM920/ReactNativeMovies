import React from 'react';

import { createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from '@react-navigation/stack';
import { DiscoverScreen, MovieDetailsScreen, ArtistsDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

export function DiscoverStack() {
  return (
    <Stack.Navigator
      headerMode='float'
      screenOptions={{
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerTintColor: '#4a4a4a',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        gestureDirection: 'horizontal',
        headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
        component={DiscoverScreen}
        name="DiscoverScreen"
        options={{ title: 'Discover' }}
      />
      <Stack.Screen component={MovieDetailsScreen} name="MovieDetailsScreen" />
      <Stack.Screen
        component={ArtistsDetailsScreen}
        name="ArtistsDetailsScreen"
      />
    </Stack.Navigator>
  );
}
