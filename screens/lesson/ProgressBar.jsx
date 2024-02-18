import { View, Text } from 'react-native';
import React from 'react';
import { ColorSpace } from 'react-native-reanimated';

export default function ProgressBar({ contentLength, contentIndex }) {
  const arraySize = Array.from({ length: contentLength }, (_, index) => index + 2);
  const width = 100 / contentLength;

  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {arraySize.map((item, index) => (
        <View style={{ backgroundColor: `${index <= contentIndex / 2 ? '#55098B' : 'grey'}`, width, borderRadius: 10, height: 10, margin: 5, flex: 1 }} />
      ))}
    </View>
  );
}
