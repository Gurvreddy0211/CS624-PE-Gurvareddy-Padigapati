import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading: React.FC = () => (
  <Text style={styles.header}>todos</Text>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    fontSize: 48,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#e6b7b7',
  },
});

export default Heading;
