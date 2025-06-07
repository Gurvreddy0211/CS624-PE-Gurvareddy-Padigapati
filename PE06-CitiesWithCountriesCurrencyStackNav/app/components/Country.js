import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function Country({ route }) {
  const { country } = route.params;

  const [currencies, setCurrencies] = useState([
    { name: 'Dollar', info: 'USA Dollar' },
    { name: 'Won', info: 'Korean Won. Not used.' },
  ]);

  const [currencyName, setCurrencyName] = useState('');
  const [currencyInfo, setCurrencyInfo] = useState('');

  const addCurrency = () => {
    if (currencyName && currencyInfo) {
      setCurrencies([...currencies, { name: currencyName, info: currencyInfo }]);
      setCurrencyName('');
      setCurrencyInfo('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={styles.title}>{country.name}</Text>
      <FlatList
        data={currencies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.currencyItem}>
            <Text style={styles.currencyName}>{item.name}</Text>
            <Text style={styles.currencyInfo}>{item.info}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Currency name"
        value={currencyName}
        onChangeText={setCurrencyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency info"
        value={currencyInfo}
        onChangeText={setCurrencyInfo}
      />
      <Button title="Add Currency" onPress={addCurrency} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  currencyItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  currencyName: { fontSize: 18, fontWeight: 'bold' },
  currencyInfo: { fontSize: 14, color: '#666' },
  input: {
    borderWidth: 1,
    borderColor: '#2196F3',
    marginVertical: 5,
    padding: 8,
  },
});
