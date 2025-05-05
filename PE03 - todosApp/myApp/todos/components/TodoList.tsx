import React from 'react';
import { View, StyleSheet } from 'react-native';
import Todo from './Todo';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => (
  <View style={styles.listContainer}>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
});

export default TodoList;
