import { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
  useEffect(() => {
    // console.log('list', todos);
  });
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            id={todo.id}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
