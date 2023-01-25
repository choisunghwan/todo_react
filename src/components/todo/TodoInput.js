import React from 'react';
import './css/TodoInput.css';
import{ MdAdd } from 'react-icons/md';

const TodoInput = () => {
  return (
    <>
        <div className='todo-input'>
            <form className='insert-form'>
                <input 
                type="text"
                placeholder='할 일을 입력후, 엔터를 누르세요!'
                autoFocus
                />
            </form>
        </div>
        <button className='begin-btn'>
            <MdAdd />
        </button>
    </>
  );
};

export default TodoInput;