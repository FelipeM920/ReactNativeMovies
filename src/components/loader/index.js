import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

export function CallLoader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}