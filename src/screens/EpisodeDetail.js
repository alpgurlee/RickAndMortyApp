import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getEpisodeById, getCharacterById } from '../services/api';

const EpisodeDetail = ({ route, navigation }) => {
  const { episodeId } = route.params;
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await getEpisodeById(episodeId);
      setEpisode(response.data);
      const characterResponses = await Promise.all(
        response.data.characters.map((url) => {
          const characterId = url.split('/').pop();
          return getCharacterById(characterId);
        })
      );
      setCharacters(characterResponses.map((res) => res.data));
    };
    fetchEpisode();
  }, [episodeId]);

  if (!episode) {
    return <Text>Loading...</Text>;
  }

  const renderCharacter = ({ item }) => (
    <TouchableOpacity style={styles.characterItem} onPress={() => navigation.navigate('CharacterDetail', { characterId: item.id })}>
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.episodeName}>{episode.name}</Text>
      <Text style={styles.episodeAirDate}>{episode.air_date}</Text>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={styles.charactersHeader}>Characters</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  episodeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  episodeAirDate: {
    fontSize: 18,
    marginBottom: 20,
  },
  characterItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
  },
  characterName: {
    fontSize: 18,
    color: '#333',
  },
  charactersHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default EpisodeDetail;
