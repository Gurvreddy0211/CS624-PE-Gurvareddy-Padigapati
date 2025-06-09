// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default function CitiesList({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Cities List Screen</Text>
//       <Button
//         title="Go to Add City"
//         onPress={() => navigation.navigate('AddCity')}
//       />
//     </View>
//   );
// }


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CitiesList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cities List Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddCity')}>
        <Text style={styles.buttonText}>Go to Add City</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8, // Rounded corners
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
