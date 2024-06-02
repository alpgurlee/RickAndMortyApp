import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Alert, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterById } from '../services/api';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';

const CharacterDetail = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === characterId);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharacterById(characterId);
      setCharacter(response.data);
    };
    fetchCharacter();
  }, [characterId]);

  const handleAddFavorite = () => {
    if (favorites.length >= 10) {
      Alert.alert("Hata", "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.");
    } else {
      dispatch(addFavorite(character));
      animateButton();
    }
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(character));
    animateButton();
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (!character) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.label}>Status: <Text style={styles.value}>{character.status}</Text></Text>
      <Text style={styles.label}>Species: <Text style={styles.value}>{character.species}</Text></Text>
      <Text style={styles.label}>Gender: <Text style={styles.value}>{character.gender}</Text></Text>
      <Text style={styles.label}>Origin: <Text style={styles.value}>{character.origin?.name}</Text></Text>
      <Text style={styles.label}>Location: <Text style={styles.value}>{character.location?.name}</Text></Text>
      {isFavorite ? (
        <AnimatedTouchable onPress={handleRemoveFavorite} style={[styles.button, styles.removeButton, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.buttonText}>Favorilerden Kaldır</Text>
        </AnimatedTouchable>
      ) : (
        <AnimatedTouchable onPress={handleAddFavorite} style={[styles.button, styles.addButton, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.buttonText}>Favorilere Ekle</Text>
        </AnimatedTouchable>
      )}
    </View>
  );
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#4682b4',
  },
  removeButton: {
    backgroundColor: '#ff6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CharacterDetail;
