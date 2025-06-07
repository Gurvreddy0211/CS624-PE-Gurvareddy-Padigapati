import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'countries') iconName = 'globe-outline';
          else if (route.name === 'cities') iconName = 'business-outline';
          else if (route.name === 'addcountry') iconName = 'add-circle-outline';
          else if (route.name === 'addcity') iconName = 'add-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="countries" options={{ title: 'CountriesNav' }} />
      <Tabs.Screen name="cities" options={{ title: 'CitiesNav' }} />
      <Tabs.Screen name="addcity" options={{ title: 'AddCity' }} />
      <Tabs.Screen name="addcountry" options={{ title: 'AddCountry' }} />
    </Tabs>
  );
}
