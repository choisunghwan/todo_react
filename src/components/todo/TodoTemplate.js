import React from 'react'
// css 로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

const TodoTemplate = () => {
  return (
    <div className='todo-template'>
        <TodoHeader />
        <TodoMain/>
        <TodoInput/>
    </div>
  )
}

export default TodoTemplate