import { useEffect, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'react basic', checked: true },
    { id: 2, text: 'component styling', checked: true },
    { id: 3, text: 'Make todo list app', checked: true },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
