import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text])
  }
  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index))
  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
