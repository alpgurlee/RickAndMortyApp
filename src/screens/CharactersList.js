import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../store/slices/charactersSlice';

const CharactersList = ({ navigation }) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCharacters(search));
  }, [dispatch, search]);

  const renderCharacter = ({ item }) => (
    <Text onPress={() => navigation.navigate('CharacterDetail', { characterId: item.id })}>
      {item.name}
    </Text>
  );

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <TextInput
        placeholder="Search Characters"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CharactersList;
