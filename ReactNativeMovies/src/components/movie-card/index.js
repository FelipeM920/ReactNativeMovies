import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';

export function MovieCard(props) {
  const {image, title, onPress = () => {}} = props;

  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
