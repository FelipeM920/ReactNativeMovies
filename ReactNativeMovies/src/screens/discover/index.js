import React, {useState, useEffect} from 'react';

import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {api} from '../../services';

import styles from './styles';

import {MovieCard} from '../../components';

export function DiscoverScreen(props) {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    async function getScreenData() {
      setIsLoading(true);
      const resp = await api.get('/discover');
      setDiscover(resp.data);
      setIsLoading(false);
    }
    getScreenData();
  }, []);

  function onButtonPress() {
    navigation.navigate('ArtistsStack');
  }

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        data={discover}
        renderItem={({item}) => (
          <View>
            <Text style={styles.categoryText}>{item.title}</Text>
            <FlatList
              horizontal={true}
              data={item.movies}
              renderItem={({item}) => (
                <MovieCard
                  title={item.title}
                  image={item.poster_path}
                  onPress={onButtonPress}
                />
              )}
            />
          </View>
        )}
      />
    );
  }

  return renderContent();
}
