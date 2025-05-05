import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  inputValue: string;
  inputChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ inputValue, inputChange }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={inputChange}
    placeholder="What needs to be done?"
    placeholderTextColor="#ccc"
  />
);

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default Input;
