import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const countriesData = [
  { id: '1', name: 'United States', currencies: ['USD'] },
  { id: '2', name: 'Japan', currencies: ['JPY'] },
  { id: '3', name: 'India', currencies: ['INR', 'USD'] },
];

export default function Countries({ navigation }) {
  return (
    <FlatList
      data={countriesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.countryItem}>
          <Text style={styles.name}>{item.name}</Text>
          <Button
            title="View Country"
            onPress={() => navigation.navigate('Country', { country: item })}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  countryItem: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  name: { fontWeight: 'bold', fontSize: 18 },
});
