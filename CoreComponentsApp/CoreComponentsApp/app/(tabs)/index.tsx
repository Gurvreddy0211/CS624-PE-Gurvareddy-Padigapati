import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Image source={require('/workspaces/CS624-PE-Gurvareddy-Padigapati/CoreComponentsApp/CoreComponentsApp/assets/images/icon.png')} style={styles.logo} />
      
      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      <Text style={styles.course}>CS 504 Software Engineering</Text>
      <Text style={styles.course}>CS 506 Programming for Computing</Text>
      <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
      <Text style={styles.course}>CS 533 Computer Architecture</Text>
      <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
      <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>

      <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
      <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>

      <Text style={styles.sectionHeader}>Capstone</Text>
      <Text style={styles.course}>CS 687 Computer Science Capstone</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    marginTop: 10,
  },
  course: {
    fontSize: 16,
    paddingVertical: 2,
  },
});

export default CoreComponents;
