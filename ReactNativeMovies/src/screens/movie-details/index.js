import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { api } from '../../services';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ArtistCard, CallLoader } from '../../components';

export function MovieDetailsScreen({ route, navigation }) {
  const { movieName, movieId } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({ title: movieName });
  }, [movieName, navigation]);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const { data } = await api.get(`/movies/${movieId}`);
      setMovieDetail(data);
      setIsLoading(false);
    }
    getMovieDetails()
  }, [movieId])

  function renderGenreList(movie) {
    return (
      <FlatList horizontal
        data={movie.genres}
        renderItem={({ item, index }) => <Text style={styles.genreText}>{index > 0 ? ` | ${item.name}` : `${item.name}`}</Text>}
        keyExtractor={item => String(item.id)} />
    )
  }

  function renderContent() {
    if (isLoading) {
      return (
        <CallLoader />
      );
    }

    function onButtonPress(name, id) {
      navigation.navigate('ArtistsDetailsScreen', {
        artistName: name,
        artistId: id,
      });
    }

    function timeConvert(time) {
      var hours = Math.floor(time / 60);
      var minutes = time % 60;
      return `${hours}h ${minutes}m`;
    }

    function renderHeaderComponent() {
      return (
        <View style={styles.container}>
          <View>
            <ImageBackground source={{ uri: movieDetail.backdrop_path }}
              resizeMode='cover'
              style={styles.image}>
              <LinearGradient
                colors={['rgba(255,255,255,0.0001)', 'rgba(255,255,255,1)']}
                style={styles.linearGradient}
              />
            </ImageBackground>
            <View style={styles.genreContainer}>
              {renderGenreList(movieDetail)}
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.details}>
              <Text>Language: {movieDetail.original_language}</Text>
              <Text>{`${movieDetail.release_date}         ${timeConvert(movieDetail.runtime)}`}</Text>
            </View>
            <View style={styles.synopsis}>
              <Text style={styles.synopsisTitle}>Synopsis</Text>
              <Text style={styles.synopsisOverview}>{movieDetail.overview}</Text>
            </View>
          </View>
          <View style={styles.cast}>
            <Text style={styles.castText}>Cast</Text>
          </View>
        </View>
      );
    }

    return (
      <FlatList
        numColumns={3}
        data={movieDetail.cast}
        renderItem={({ item, index }) => (
          <ArtistCard
            name={item.name}
            image={item.profile_path}
            onPress={() => onButtonPress(item.name, item.id)}
            empty={item.empty}
            keyExtractor={i => i.id}
            index={index}
          />
        )}
        ListHeaderComponent={
          renderHeaderComponent()
        }
      />
    );
  }

  return renderContent();
}