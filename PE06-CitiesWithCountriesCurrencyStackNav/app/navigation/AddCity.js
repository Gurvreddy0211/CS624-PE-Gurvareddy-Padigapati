import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddCity({ navigation }) {
  const [cityName, setCityName] = useState('');

  const handleAddCity = () => {
    if (cityName.trim() === '') {
      Alert.alert('Validation', 'Please enter a city name.');
      return;
    }
    // Here you could add logic to save the city
    Alert.alert('Success', `${cityName} has been added.`);
    setCityName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={cityName}
        onChangeText={setCityName}
      />
      <Button title="Add City" onPress={handleAddCity} />
      <View style={styles.spacer} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  spacer: {
    height: 10,
  },
});
