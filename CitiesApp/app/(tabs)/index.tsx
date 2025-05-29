import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import Cities from '../../src/Cities/Cities';
import AddCity from '../../src/AddCity/AddCity';
import Countries from '../../src/Countries/Countries';
import AddCountry from '../../src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Placeholder component for City Details
function CityPlaceholder() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>City Details Placeholder</Text>
    </View>
  );
}

// Placeholder component for Country Details
function CountryPlaceholder() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Country Details Placeholder</Text>
    </View>
  );
}

// Stack for Cities
function CitiesStackScreen({ cities }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">
        {props => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

// Stack for Countries
function CountriesStackScreen({ countries }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">
        {props => <Countries {...props} countries={countries} />}
      </Stack.Screen>
      <Stack.Screen name="Country" component={CountryPlaceholder} />
    </Stack.Navigator>
  );
}

export default function AppTabs() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = city => {
    setCities(prevCities => [...prevCities, city]);
  };

  const addCountry = country => {
    setCountries(prevCountries => [...prevCountries, country]);
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Cities">
        {props => <CitiesStackScreen {...props} cities={cities} />}
      </Tab.Screen>
      <Tab.Screen name="Add City">
        {props => <AddCity {...props} addCity={addCity} />}
      </Tab.Screen>
      <Tab.Screen name="Countries">
        {props => <CountriesStackScreen {...props} countries={countries} />}
      </Tab.Screen>
      <Tab.Screen name="Add Country">
        {props => <AddCountry {...props} addCountry={addCountry} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
