import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AddCountry({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Add Country Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
