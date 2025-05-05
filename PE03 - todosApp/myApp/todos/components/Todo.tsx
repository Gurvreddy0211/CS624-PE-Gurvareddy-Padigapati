import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todo: TodoItem;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text
      style={[
        styles.todoText,
        todo.completed && styles.completed,
      ]}
    >
      {todo.text}
    </Text>
    <View style={styles.buttons}>
      <TodoButton
        name="✓"
        onPress={() => toggleComplete(todo.id)}
        completed={todo.completed}
      />
      <TodoButton
        name="✕"
        onPress={() => deleteTodo(todo.id)}
        completed={false}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eee',
  },
  todoText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  buttons: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});

export default Todo;
