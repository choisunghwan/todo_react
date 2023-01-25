import React from 'react';
import{ MdDone, MdDelete } from 'react-icons/md';
import './css/TodoItem.css';
const TodoItem = ({todo}) => {

  const{title,done} = todo;
  return (
    <li className='todo-item'>
        <div className='check-circle'>
            {done && <MdDone/>}
        </div>
        <span className='text'>{title}</span>
        <div className='remove'>
            <MdDelete/>
        </div>
        
    </li>
  );
};

export default TodoItem;

