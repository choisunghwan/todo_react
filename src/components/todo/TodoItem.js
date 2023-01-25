import React from 'react';
import{ MdDone, MdDelete } from 'react-icons/md';
import './css/TodoItem.css';
const TodoItem = () => {
  return (
    <li className='todo-item'>
        <div className='check-circle'>
            <MdDone/>
        </div>
        <span className='text'>할 일 텍스트</span>
        <div className='remove'>
            <MdDelete/>
        </div>
        
    </li>
  );
};

export default TodoItem;

