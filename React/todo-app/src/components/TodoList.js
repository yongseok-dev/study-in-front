import { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  useEffect(() => {
    // console.log('list', todos);
  });
  return (
    <div className="TodoList">
      <TodoListItem item={todos[0]} />
      <TodoListItem item={todos[1]} />
      <TodoListItem item={todos[2]} />
    </div>
  );
};

export default TodoList;
