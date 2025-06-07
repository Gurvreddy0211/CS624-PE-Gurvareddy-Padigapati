import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="countries" options={{ title: 'Countries' }} />
      <Tabs.Screen name="cities" options={{ title: 'Cities' }} />
      <Tabs.Screen name="addcountry" options={{ title: 'Add Country' }} />
      <Tabs.Screen name="addcity" options={{ title: 'Add City' }} />
    </Tabs>
  );
}
