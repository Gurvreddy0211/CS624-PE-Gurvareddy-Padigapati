import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
 
const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');
 
  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];
 
  const depthOfStudyCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];
 
  const capstoneCourse = ['MSCS Capstone Project (Check CityU Catalog for Code)']; // You'll need to find the actual code
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Image source={require('./icon.png')} style={styles.icon} />
        <Text style={styles.title}>MSCS Core Components</Text>
      </View>
 
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Favorite Course (Optional):</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFavoriteCourse(text)}
          value={favoriteCourse}
          placeholder="e.g., CS624"
        />
      </View>
 
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Requirements (24 Credits)</Text>
        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}
      </View>
 
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Depth of Study (6 Credits)</Text>
        {depthOfStudyCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}
      </View>
 
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Capstone Course</Text>
        {capstoneCourse.map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}
      </View>
 
      <Text style={styles.catalogLink}>
        For more details, visit:{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/')}>
          CityU's Catalog
        </Text>
      </Text>
    </ScrollView>
  );
};
 
import { Linking } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  courseItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#444',
  },
  catalogLink: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
 
export default CoreComponents;