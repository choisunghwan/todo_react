import React from 'react';
import './css/TodoHeader.css';
const TodoHeader = () => {
  return (
    <header>
        <h1>2023년 1월 25일</h1>
        <h2 className='day'>수요일</h2>
        <div className='task-left'>할 일 2개 남음</div>
    </header>
  );
};

export default TodoHeader;