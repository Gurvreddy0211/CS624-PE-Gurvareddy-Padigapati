import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TodoButtonProps {
  name: string;
  onPress: () => void;
  completed: boolean;
}

const TodoButton: React.FC<TodoButtonProps> = ({ name, onPress, completed }) => {
  const isDone = name === '✓';
  const isDelete = name === '✕';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isDone && styles.doneButton,
        isDelete && styles.deleteButton,
        isDone && completed && styles.doneCompleted,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          isDone && completed ? styles.doneTextCompleted : styles.doneText,
          isDelete && styles.deleteText,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  doneButton: {
    borderColor: '#888',
  },
  deleteButton: {
    borderColor: '#ff4d4d',
  },
  doneCompleted: {
    backgroundColor: '#888',
  },
  buttonText: {
    fontSize: 16,
  },
  doneText: {
    color: '#888',
  },
  doneTextCompleted: {
    color: '#fff',
  },
  deleteText: {
    color: '#ff4d4d',
  },
});

export default TodoButton;
