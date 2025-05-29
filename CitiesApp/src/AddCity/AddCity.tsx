import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../components/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type City = {
  id: string;
  city: string;
  country: string;
  locations: any[];
};

type Props = {
  addCity: (city: City) => void;
  navigation: NativeStackNavigationProp<any>;
};

type State = {
  city: string;
  country: string;
};

class AddCity extends React.Component<Props, State> {
  state: State = {
    city: '',
    country: '',
  };

  onChangeText = (key: keyof State, value: string) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { city, country } = this.state;

    if (city.trim() === '' || country.trim() === '') {
      Alert.alert('Incomplete Form', 'Please fill in both fields.');
      return;
    }

    const newCity: City = {
      city,
      country,
      id: uuid.v4() as string,
      locations: [],
    };

    this.props.addCity(newCity);
    this.setState({ city: '', country: '' }, () => {
      this.props.navigation.navigate('Cities');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add a City</Text>
        <TextInput
          placeholder="City name"
          onChangeText={(val) => this.onChangeText('city', val)}
          style={styles.input}
          value={this.state.city}
          autoCapitalize="words"
          returnKeyType="next"
        />
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
          autoCapitalize="words"
          returnKeyType="done"
        />
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Add City</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    color: 'white',
    fontSize: 36,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    height: 50,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddCity;
