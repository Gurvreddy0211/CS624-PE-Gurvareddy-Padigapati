import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CitiesList({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cities List Screen</Text>
      <Button
        title="Go to Add City"
        onPress={() => navigation.navigate('AddCity')}
      />
    </View>
  );
}
