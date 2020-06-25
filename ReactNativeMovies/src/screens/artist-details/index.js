import React, {useEffect, useLayoutEffect, useState} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

import {api} from '../../services';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export function ArtistsDetailsScreen({route, navigation}) {
  const {artistName, artistId} = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [artistDetail, setArtistDetail] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({title: artistName});
  }, [artistName, navigation]);

  useEffect(() => {
    async function getArtistDetails() {
      setIsLoading(true);
      const {data} = await api.get(`/artists_details/${artistId}`);
      setArtistDetail(data);
      setIsLoading(false);
    }
    getArtistDetails();
  }, [artistId]);

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ScrollView>
        <View>
          <ImageBackground
            source={{uri: artistDetail.profile_path}}
            resizeMode="cover"
            style={styles.image}>
            <LinearGradient
              colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.80)']}
              style={styles.linearGradient}
            />
          </ImageBackground>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{artistDetail.name}</Text>
            <Text style={styles.extraInfo}>{`${
              artistDetail.known_for_department
            } | ${artistDetail.birthday}`}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.summaryText}>Summary</Text>
        </View>
        <View>
          <Text style={styles.placeBirthText}>{artistDetail.place_of_birth}</Text>
          <Text style={styles.biographyText}>{artistDetail.biography}</Text>
        </View>
      </ScrollView>
    );
  }
  return renderContent();
}
