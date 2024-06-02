import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../store/slices/favoritesSlice';

const FavoriteCharacters = ({ navigation }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleRemoveFavorite = (character) => {
    Alert.alert(
      "Emin misiniz?",
      `${character.name} adlı karakteri favorilerden kaldırmak istediğinize emin misiniz?`,
      [
        {
          text: "Hayır",
          style: "cancel"
        },
        {
          text: "Evet",
          onPress: () => dispatch(removeFavorite(character))
        }
      ]
    );
  };

  const renderFavorite = ({ item }) => (
    <View style={styles.characterContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { characterId: item.id })}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleRemoveFavorite(item)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Kaldır</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderFavorite}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No favorite characters.</Text>}
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
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  removeButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FavoriteCharacters;
