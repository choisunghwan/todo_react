import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';

// css 로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

import { BASE_URL, TODO } from '../../config/host-config';

import { getToken } from '../util/login-util';

const TodoTemplate = () => {

  const API_BASE_URL = BASE_URL + TODO;
  const ACCESS_TOKEN = getToken();

  // 할일 api데이터
  const [todos, setTodos] = useState([]);

  // 로딩중 상태
  const [loading, setLoading] = useState(true);

  const headerInfo = {
    'content-type': 'application/json' 
    , 'Authorization': 'Bearer ' + ACCESS_TOKEN 
  };

  // 할 일 등록 서버 요청
  const addTodo = (todo) => {

    fetch(API_BASE_URL, {
        method: 'POST',
        headers: headerInfo,
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(result => {
        setTodos(result.todos);
    });
  };

  // 할 일 삭제 요청 처리
  const deleteTodo = (id) => {

    fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: headerInfo
    })
    .then(res => res.json())
    .then(result => {
        setTodos(result.todos);
    });
  };

  // 할 일 수정 요청 처리
  const updateTodo = todo => {

    fetch(`${API_BASE_URL}/${todo.id}`, {
        method: 'PUT',
        headers: headerInfo,
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(result => {
        setTodos(result.todos);
    });
  };


  // 렌더링되자마자 할 일 => todos api GET 목록 호출
  useEffect(() => {

    fetch(API_BASE_URL, {
        method: 'GET',
        headers: headerInfo
    })
        .then(res => {
          if (res.status === 403) {
            alert('로그인이 필요한 서비스입니다!');
            // 리다이렉트
            window.location.href = '/login';
            return;
          } else if (res.status === 500) {
            alert('서버가 불안정합니다 ㅈㅅ');
            return;
          }
          return res.json();
        })
        .then(result => {
            // console.log(result.todos);
            setTodos(result.todos);

            // 로딩완료처리
            setLoading(false);
        });

  }, []);

  // 로딩중일 때 보여줄 태그
  const loadingPage = (
    <div className="loading">
      <Spinner color="danger">
        Loading...
      </Spinner>
    </div>
  );

  // 로딩완료시 보여줄 태그
  const viewPage = (
    <div className="todo-template">
        <TodoHeader todoList={todos} />
        <TodoMain 
            todoList={todos} 
            remove={deleteTodo} 
            update={updateTodo} 
        />
        <TodoInput add={addTodo} /> 
    </div>
  );
  

  return (
    <>
      {loading ? loadingPage : viewPage}
    </>
  );
};

export default TodoTemplate;