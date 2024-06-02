// components/HeartButton.js
import React, { useRef } from 'react';
import { TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const HeartButton = ({ isFavorite, onPress }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.5,
        duration: 200,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onPress();
    });
  };

  return (
    <AnimatedTouchable onPress={handlePress} style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
      <Animated.Text style={styles.heart}>{isFavorite ? '❤️' : '🤍'}</Animated.Text>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#4682b4',
  },
  heart: {
    fontSize: 24,
  },
});

export default HeartButton;
