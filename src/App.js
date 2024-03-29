import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}
    }))
  }

  const resetTodos = () => {
    setTodos([]);
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo}/>
      {!!todos.length && <TodosActions completedTodosExist={!!completedTodosCount} resetTodos={resetTodos} deleteCompletedTodos={deleteCompletedTodos} />}
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      {completedTodosCount > 0 && <h2>{`There is ${completedTodosCount} completed ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
