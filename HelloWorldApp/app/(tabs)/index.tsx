import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: Gurvareddy Padigapati</Text>
      <Text style={styles.text}>Program: MS in Computer Science</Text>
      <Text style={styles.text}>School: City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    padding: 10,
    margin: 5,
    fontSize: 18,
  },
});

export default HelloWorldApp;
