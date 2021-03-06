import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {api} from '../../services';
import {ArtistCard, CallLoader} from '../../components';

export function ArtistsScreen(props) {
  const {navigation} = props;

  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getScreenData() {
      setIsLoading(true);
      const resp = await api.get('/artists');
      setArtists(resp.data);
      setIsLoading(false);
    }
    getScreenData();
  }, []);

  function onButtonPress(name, id) {
    navigation.navigate('ArtistsDetailsScreen', {
      artistName: name,
      artistId: id,
    });
  }

  function formatData(data, numColumns) {
    const emptyQty = numColumns - (data.length % numColumns);
    for (let id = 0; id < emptyQty; id++) {
      data.push({id: `blank-${id}`, empty: true});
    }
    return data;
  }

  function renderContent() {
    if (isLoading) {
      return (
        <CallLoader />
      );
    }

    return (
      <FlatList
        numColumns={3}
        data={formatData(artists, 3)}
        renderItem={({item, index}) => (
          <ArtistCard
            name={item.name}
            image={item.profile_path}
            onPress={() => onButtonPress(item.name, item.id)}
            empty={item.empty}
            keyExtractor={i => i.id}
            index={index}
          />
        )}
      />
    );
  }

  return renderContent();
}
