import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DiscoverStack, ArtistsStack} from './stacks';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator tabBarOptions={{activeTintColor: '#0294A5'}}>
        <BottomTab.Screen
          component={DiscoverStack}
          name="DiscoverStack"
          options={{
            title: 'Discover',
            tabBarIcon: () => (
              <Icon name="view-module" color="#333" size={24} />
            ),
          }}
        />
        <BottomTab.Screen
          component={ArtistsStack}
          name="ArtistsStack"
          options={{
            title: 'Artists',
            tabBarIcon: () => (
              <Icon name="account-circle" color="#333" size={24} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
