import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes, fetchCharacters } from '../store/slices/episodesSlice';
import debounce from 'lodash.debounce';

const EpisodesList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { episodes, characters, page, totalPages, status, error } = useSelector((state) => state.episodes);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const debouncedSearch = useCallback(
    debounce((text) => {
      if (searchType === 'episodes') {
        dispatch(fetchEpisodes({ page: 1, search: text }));
      } else {
        dispatch(fetchCharacters({ page: 1, search: text }));
      }
    }, 300),
    [dispatch, searchType]
  );

  useEffect(() => {
    if (!showSearch || searchType === 'episodes') {
      dispatch(fetchEpisodes({ page, search }));
    } else if (searchType === 'characters') {
      dispatch(fetchCharacters({ page, search }));
    }
  }, [dispatch, page, searchType, showSearch]);

  const handleNextPage = () => {
    if (page < totalPages) {
      if (searchType === 'characters') {
        dispatch(fetchCharacters({ page: page + 1, search }));
      } else {
        dispatch(fetchEpisodes({ page: page + 1, search }));
      }
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      if (searchType === 'characters') {
        dispatch(fetchCharacters({ page: page - 1, search }));
      } else {
        dispatch(fetchEpisodes({ page: page - 1, search }));
      }
    }
  };

  const handleSearch = (text) => {
    setSearch(text);
    debouncedSearch(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => {
      if (searchType === 'characters') {
        navigation.navigate('CharacterDetail', { characterId: item.id });
      } else {
        navigation.navigate('EpisodeDetail', { episodeId: item.id });
      }
    }}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const mergedData = searchType === 'characters'
    ? characters.map(item => ({ ...item, type: 'character' }))
    : episodes.map(item => ({ ...item, type: 'episode' }));

  return (
    <View style={styles.container}>
      {!showSearch && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.searchButton} onPress={() => {
            setSearchType('episodes');
            setShowSearch(true);
          }}>
            <Text style={styles.searchButtonText}>SEARCH EPISODES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress={() => {
            setSearchType('characters');
            setShowSearch(true);
          }}>
            <Text style={styles.searchButtonText}>SEARCH CHARACTERS</Text>
          </TouchableOpacity>
        </View>
      )}
      {showSearch && (
        <View style={styles.searchContainer}>
          <TextInput
            placeholder={`Search ${searchType === 'episodes' ? 'Episodes' : 'Characters or Characteristics'}`}
            value={search}
            onChangeText={handleSearch}
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={() => {
            setShowSearch(false);
            setSearch('');
            setSearchType('');
            dispatch(fetchEpisodes({ page: 1, search: '' }));
          }}>
            <Text style={styles.cancelButton}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      {status === 'loading' && <Text>Loading...</Text>}
      {status === 'failed' && <Text>Error: {error}</Text>}
      {status === 'succeeded' && (
        <FlatList
          data={mergedData}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.type}-${item.id}`}
          ListEmptyComponent={<Text style={styles.noResults}>No results found.</Text>}
          keyboardShouldPersistTaps="handled"
          initialNumToRender={10}
        />
      )}
      <View style={styles.pagination}>
        <Button title="PREVIOUS" onPress={handlePrevPage} disabled={page === 1} />
        <Button title="Favoriler" onPress={() => navigation.navigate('FavoriteCharacters')} />
        <Button title="NEXT" onPress={handleNextPage} disabled={page === totalPages} />
      </View>
      <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  cancelButton: {
    marginLeft: 10,
    color: '#FF0000',
    fontSize: 18,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  pageInfo: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  noResults: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    color: '#888',
  },
});

export default EpisodesList;
