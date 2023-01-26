import React from 'react';
import './css/TodoHeader.css';
const TodoHeader = ({todoList}) => {

  //todoList에서 done값이 false인 객체들만 필터링
  const undoneTodos = todoList.filter(todo=>!todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <header>
        <h1>{dateString}</h1>
        <h2 className='day'>{dayName}</h2>
        <div className='task-left'>할 일 {undoneTodos.length}개 남음</div>
    </header>
  );
};

export default TodoHeader;