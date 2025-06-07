import React from 'react';
import { View, Text, Button } from 'react-native';

export default function City({ navigation, route }) {
  const { cityId } = route.params || {};

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>City Screen</Text>
      <Text>City ID: {cityId}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
