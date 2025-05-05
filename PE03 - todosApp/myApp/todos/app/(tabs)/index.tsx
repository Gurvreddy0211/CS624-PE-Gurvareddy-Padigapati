import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import TodoList from '../../components/TodoList';
import TabBar from '../../components/TabBar';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodosApp() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Incomplete'>('All');

  const inputChange = (value: string) => {
    setInputValue(value);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, newTodo];
        console.log('Todos added:', updatedTodos); // Debug log
        return updatedTodos;
      });
      setInputValue('');
    }
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      console.log('Toggled complete for id:', id, 'Todos:', updatedTodos); // Debug log
      return updatedTodos;
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      console.log('Deleted todo id:', id, 'Todos:', updatedTodos); // Debug log
      return updatedTodos;
    });
  };

  const getFilteredTodos = (): Todo[] => {
    console.log('Current filter:', filter); // Debug log
    if (filter === 'Completed') return todos.filter((todo) => todo.completed);
    if (filter === 'Incomplete') return todos.filter((todo) => !todo.completed);
    return todos;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.title}>todos</Text>
        <Input inputValue={inputValue} inputChange={inputChange} />
        <TouchableOpacity style={styles.submitButton} onPress={addTodo}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        <TodoList
          todos={getFilteredTodos()}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </ScrollView>
      <TabBar filter={filter} setFilter={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: '#e6b7b7',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  submitText: {
    fontSize: 16,
    color: '#333',
  },
});