import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CitiesList from '../components/CitiesList';
import AddCity from '../navigation/AddCity';
import City from '../components/City';

const Stack = createNativeStackNavigator();

export default function CitiesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CitiesList"
        component={CitiesList}
        options={({ navigation }) => ({
          title: 'Cities',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddCity')}
              title="Add City"
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddCity"
        component={AddCity}
        options={{ title: 'Add City' }}
      />
      <Stack.Screen
        name="City"
        component={City}
        options={{ title: 'City Details' }}
      />
    </Stack.Navigator>
  );
}
