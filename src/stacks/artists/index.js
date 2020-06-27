import React from 'react';

import { createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from '@react-navigation/stack';
import { ArtistsScreen, ArtistsDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

export function ArtistsStack() {
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
        component={ArtistsScreen}
        name="ArtistsScreen"
        options={{ title: 'Artists' }}
      />
      <Stack.Screen
        component={ArtistsDetailsScreen}
        name="ArtistsDetailsScreen"
      />
    </Stack.Navigator>
  );
}
