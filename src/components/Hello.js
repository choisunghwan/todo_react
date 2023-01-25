import React, { useState, useEffect } from 'react'

const Hello = () => {

    // 일반 변수는 상태값관리가 안됨
    // let nickName = '익명';
    const [nickName, setNickName] = useState('익명');
    // console.log(us);
 
  // 여기에 쓴 코드는 태그가 렌더링되기 전에 실행됨.  
//   const $btn = document.querySelector('.btn');
//   $btn.onclick = e => {
//     alert('박사님 안녕~~');
//   };

  const foo = () => {
    console.log('foo!');
  };
  
  // 이벤트 핸들러 함수 정의
  const sayHello = e => {
    console.log('sayHello!');
    // alert('박사님 안녕~~');
    
    // 상태변수 값을 변경할때는 직접 대입하면 안되고 상태변경함수를 이용해야 함.
    // nickName = '척척박사'; (X)
    setNickName('척척박사'); // (O)

  };

  // 화면이 처음 렌더링(마운트) 될 때, 상태값이 변경될 때 호출
  // 2번째 파라미터에 의존성 배열을 넣을 수 있음
  // 빈배열 설정시 초기렌더링시에 단 1회만 호출
  // 의존성 배열에 상태값을 넣으면 해당 값이 업데이트될 때 다시 호출
  useEffect(() => {
    console.log('2. useEffect call!!!');
    console.log('3. nickName(useEffect): ' + nickName);

    // 정리함수
    // 화면이 리렌더링되기 직전에 호출
    return () => {
      console.log('4. cleanup call!');
      console.log('5. nickName(cleanup): ' + nickName);
    };

  }, [nickName]);
  
  console.log('1. nickName(component) : ' + nickName);

  // 컴포넌트 내 실행코드 (1순위) - 화면이 그려지기도 전에 실행
  // 렌더링시에 실행되는 코드 (2순위)
  // useEffect에 있는 콜백 (3순위)

  return (
    <>
      {foo()}
        <h1>Hello ~~~ {nickName} </h1>
        <button className="btn" onClick={sayHello}>척척박사</button>
        <button className="btn" onClick={() => { setNickName('척척석사'); }}>척척석사</button>
    </>
  )
}

export default Hello