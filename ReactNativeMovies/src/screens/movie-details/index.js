import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, ActivityIndicator, ImageBackground, Text } from 'react-native';
import { api } from '../../services';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ArtistCard } from '../../components';

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
      console.log(data);
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
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    function onButtonPress(name, id) {
      navigation.navigate('ArtistsDetailsScreen', {
        artistName: name,
        artistId: id,
      });
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
                <Text>{`${movieDetail.release_date}         ${movieDetail.runtime}`}</Text>
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
        }
      />
    );
  }

  return renderContent();
}