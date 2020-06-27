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
      <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'DiscoverStack') {
            iconName = 'view-module';
          } else if (route.name === 'ArtistsStack') {
            iconName = 'account-circle'
          }
          return <Icon name={iconName} color={color} size={35} />
        }
      })}
      tabBarOptions={{activeTintColor: '#0294A5', inactiveTintColor: '#9B9B9B'}}>
        <BottomTab.Screen
          component={DiscoverStack}
          name='DiscoverStack'
          options={{
            title: 'Discover',
          }}
        />
        <BottomTab.Screen
          component={ArtistsStack}
          name='ArtistsStack'
          options={{
            title: 'Artists',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
