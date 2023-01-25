import React from 'react';
import{ MdDone, MdDelete } from 'react-icons/md';
import './css/TodoItem.css';
import cn from 'classnames';
const TodoItem = ({todo, remove}) => {

  const{id, title,done} = todo;

  // 서버에 삭제 요청 클릭 이벤트 핸들러
  const deleteClickHandler = e =>{
    remove(id);
  };
  return (
    <li className='todo-item'>
        <div className={cn('check-circle',{active: done})}>
            {done && <MdDone/>}
        </div>
        <span className={cn('text',{finish: done})}>{title}</span>
        <div className='remove' onClick={deleteClickHandler}>
            <MdDelete/>
        </div>
        
    </li>
  );
};

export default TodoItem;

