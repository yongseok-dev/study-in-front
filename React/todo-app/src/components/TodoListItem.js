import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import { useEffect } from 'react';
const TodoListItem = ({ item }) => {
  const { id, text, checked } = item;
  useEffect(() => {
    // console.log(item);
  });
  return (
    <div className="TodoListItem" id={id}>
      <div className={checked ? 'checked' : 'checkbox '}>
        <MdCheckBoxOutlineBlank />
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
