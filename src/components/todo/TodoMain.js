import React from 'react'
import TodoItem from './TodoItem'

const TodoMain = () => {
  return (
    <ul className='todo-list'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </ul>
  )
}

export default TodoMain