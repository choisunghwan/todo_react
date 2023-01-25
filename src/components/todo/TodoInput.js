import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';
import './css/TodoInput.css';

const TodoInput = ({ add }) => {
  
  // todo-input 박스를 렌더링할지 여부
  const [open, setOpen] = useState(false);

  // 입력폼에 입력한 데이터들을 담을 상태변수
  const [todo, setTodo] = useState({ 
    title: '',
    // text: ''
  });

  // todo-input 박스를 열고 닫는 클릭이벤트 핸들러
  const inputToggle = () => setOpen(!open);

  // 할 일 입력 후 엔터치면 서버로 POST요청을 보내는 이벤트 핸들러
  const todoAddHandler = e => {
    if (e.key === 'Enter') {
        // console.log('엔터키 잘누르네?');

        // 입력데이터들을 읽기
        console.log(todo);

        // 서버 요청 보내기
        add(todo);

        // 입력끝나면 입력칸 비우기
        setTodo({
            ...todo,
            title: ''
        });
    }
  };

  // 입력값을 실시간으로 상태변수 todo에 저장하는 체인지이벤트 핸들러
  const titleChangeHandler = e => {
    
     setTodo({
        ...todo, // 기존데이터 복사
        title: e.target.value
     });
  };

//   const blahblahHandler = e => {
//     setTodo({
//         ...todo,
//         text: e.target.value
//      });
//   };

  const stopSubmit = e => e.preventDefault(); // 자동 서브밋 중지

  return (
    <>
        { open &&
            <div className="todo-input">
                <form className="insert-form" onSubmit={stopSubmit}>
                    <input 
                        type="text"
                        placeholder="할 일을 입력 후, 엔터를 누르세요!"
                        autoFocus
                        onKeyUp={todoAddHandler}
                        onChange={titleChangeHandler}
                        value={todo.title}
                    /> 
                    {/* <input 
                        type="text"
                        placeholder='아무말이나써봐'
                        onChange={blahblahHandler}
                    /> */}
                </form>
            </div>
        }

        <button className={cn('begin-btn', {open})} onClick={inputToggle}>
            <MdAdd />
        </button>
    </>
  );
};

export default TodoInput;