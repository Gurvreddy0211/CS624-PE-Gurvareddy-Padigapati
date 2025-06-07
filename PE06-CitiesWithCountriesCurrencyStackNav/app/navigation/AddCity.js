import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AddCity({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Add City Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
