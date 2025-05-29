import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../components/theme';

type Country = {
  id: string;
  country: string;
  cities: any[]; // Optional: you can replace this with a proper type later
};

type Props = {
  countries: Country[];
  navigation: NativeStackNavigationProp<any>;
};

export default class Countries extends React.Component<Props> {
  navigate = (item: Country) => {
    this.props.navigation.navigate('Country', { country: item });
  };

  render() {
    const { countries } = this.props;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message="No saved countries!" />}
          {countries.map((item) => (
            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={item.id}>
              <View style={styles.countryContainer}>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
    fontWeight: '600',
  },
});
