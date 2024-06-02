import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Canvas, Skia, useCanvasRef, useValue, runTiming, Easing } from '@shopify/react-native-skia';

const SkiaButton = ({ onPress, title }) => {
  const canvasRef = useCanvasRef();
  const touchX = useValue(0);
  const touchY = useValue(0);
  const rippleRadius = useValue(0);

  const handlePressIn = (e) => {
    const { locationX, locationY } = e.nativeEvent;
    touchX.current = locationX;
    touchY.current = locationY;
    runTiming(rippleRadius, 100, { duration: 500, easing: Easing.inOut(Easing.ease) });
  };

  const handlePressOut = () => {
    runTiming(rippleRadius, 0, { duration: 500, easing: Easing.inOut(Easing.ease) });
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.button}
    >
      <Canvas ref={canvasRef} style={styles.canvas}>
        <Skia.ShaderPaint
          shader={Skia.Shader.MakeLinearGradient(
            [0, 0, 200, 200],
            ['#FF00FF', '#00FFFF'],
            [0, 1],
            Skia.TileMode.Clamp
          )}
        />
        <Skia.Circle cx={touchX} cy={touchY} r={rippleRadius} color="rgba(255, 255, 255, 0.5)" />
      </Canvas>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    position: 'absolute',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SkiaButton;
