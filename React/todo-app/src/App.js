import { useCallback, useEffect, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'react basic', checked: true },
    { id: 2, text: 'component styling', checked: false },
    { id: 3, text: 'Make todo list app', checked: true },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      // console.log('start', todos);
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
      // console.log('end', todos); //setTodos로 원본 todos 업데이트가 되지 않음...
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
