import React, { useState, createContext, useContext, lazy, Suspense } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Cities = lazy(() => import('./src/cities/Cities'));
const AddCity = lazy(() => import('./src/addcity/AddCity'));
const AddCountry = lazy(() => import('./src/addcountry/AddCountry'));
const Countries = lazy(() => import('./src/countries/Countries'));

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    setCountries((prevCountries) => [...prevCountries, country]);
  };

  return (
    <CountriesContext.Provider value={{ countries, addCountry }}>
      {children}
    </CountriesContext.Provider>
  );
}

function CountriesStackScreen() {
  const { countries } = useContext(CountriesContext);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">
        {(props) => <Countries {...props} countries={countries} />}
      </Stack.Screen>
      <Stack.Screen name="CountryDetail" component={CountryPlaceholder} />
    </Stack.Navigator>
  );
}

function CountryPlaceholder({ route, navigation }) {
  const { country } = route.params || {};
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {country ? (
        <>
          <Text>{`Details for ${country.name}`}</Text>
          <Text>{`Currency: ${country.currency}`}</Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </>
      ) : (
        <Text>Country Details Placeholder</Text>
      )}
    </View>
  );
}

export default function AppTabs() {
  return (
    <CountriesProvider>
      <NavigationContainer>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Tab.Navigator>
            <Tab.Screen name="Add Country">
              {(props) => (
                <AddCountry {...props} addCountry={useContext(CountriesContext).addCountry} />
              )}
            </Tab.Screen>
            <Tab.Screen name="Countries" component={CountriesStackScreen} />
          </Tab.Navigator>
        </Suspense>
      </NavigationContainer>
    </CountriesProvider>
  );
}
