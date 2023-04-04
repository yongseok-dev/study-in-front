import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import { useCallback, useEffect } from 'react';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  useEffect(() => {
    // console.log(id);
  });
  // const onClick = useCallback((id) => {
  //   console.log('onClick', id);
  //   console.log('onClick', onRemove);
  //   onRemove(id);
  // }, []);
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        id={id}
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
