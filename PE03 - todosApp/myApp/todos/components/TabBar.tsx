import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TabBarProps {
  filter: 'All' | 'Completed' | 'Incomplete';
  setFilter: (filter: 'All' | 'Completed' | 'Incomplete') => void;
}

const TabBar: React.FC<TabBarProps> = ({ filter, setFilter }) => {
  const tabs: { label: string; value: 'All' | 'Completed' | 'Incomplete' }[] = [
    { label: 'ALL', value: 'All' },
    { label: 'ACTIVE', value: 'Incomplete' },
    { label: 'COMPLETED', value: 'Completed' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map(({ label, value }) => {
        const isActive = filter === value;
        return (
          <TouchableOpacity
            key={value}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => setFilter(value)}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e6b7b7',
  },
  activeTab: {
    backgroundColor: '#e6b7b7',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TabBar;
