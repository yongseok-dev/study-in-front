import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import { useCallback, useEffect } from 'react';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  useEffect(() => {
    // console.log(id);
  });
  /** 아래처럼 하면 안된다! ->
   *  함수의 실행 위치 때문인지 state가 변경되지 않는 문제가 발생 */
  // const onClick = useCallback((id) => {
  //   console.log('onClick', id);
  //   console.log('onClick', onRemove);
  //   onRemove(id);
  // }, []);
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
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
