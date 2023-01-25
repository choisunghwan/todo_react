import React from 'react'
// css 로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

const TodoTemplate = () => {

  // 할일 api 데이터
  const todos = [
    {
      id:1,
      title: '아침 산책',
      done:true
    },
    {
      id:2,
      title: '오늘의 뉴스 읽기',
      done:true
    },
    {
      id:3,
      title: '샌드위치 사 먹기',
      done:false
    },
    {
      id:4,
      title: '리액트 공부하기',
      done:false
    },
  ];


  return (
    <div className='todo-template'>
        <TodoHeader />
        <TodoMain todoList={todos}/>
        <TodoInput/>
    </div>
  )
}

export default TodoTemplate