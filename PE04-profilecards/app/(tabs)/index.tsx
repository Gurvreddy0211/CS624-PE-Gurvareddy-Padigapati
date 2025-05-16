import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const profileCardColor = 'dodgerblue';
const screenWidth = Dimensions.get('window').width;

const DATA = Array.from({ length: 6 }).map((_, index) => ({
  id: index.toString(),
  name: 'John Doe',
  occupation: 'React Native Developer',
  description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
  image: require('../../assets/images/user.png'),
}));

const ProfileCard = ({ item, isExpanded, onPress }) => {
  return (
    <TouchableOpacity style={[styles.cardContainer, isExpanded && styles.cardContainerExpanded]} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={item.image} />
      </View>
      <Text style={[styles.cardName, isExpanded && styles.cardNameExpanded]}>
        {item.name}
      </Text>
      {isExpanded && (
        <>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>{item.occupation}</Text>
          </View>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default function App() {
  const [expandedId, setExpandedId] = useState(null);

  const handlePress = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProfileCard
            item={item}
            isExpanded={expandedId === item.id}
            onPress={() => handlePress(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardContainer: {
    width: 140,
    height: 180,
    backgroundColor: profileCardColor,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  cardContainerExpanded: {
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderRadius: 60,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  cardNameExpanded: {
    fontSize: 24,
  },
  cardOccupationContainer: {
    borderBottomWidth: 2,
    borderColor: 'black',
    marginTop: 10
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff'
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#fff'
  }
});
