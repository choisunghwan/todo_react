import React, { useState } from 'react'

const Hello = () => {

    //일반 변수는 상태값관리가 안됨.
    // let nickName = '익명';
    const [nickName, setNickName] = useState('익명');
    // console.log(us);

  // 여기에 쓴 코드는 태그가 렌더링되기 전에 실행됨.  
//   const $btn = document.querySelector('.btn');
//   $btn.onclick = e => {
//     alert('박사님 안녕~~');
//   };
  
  // 이벤트 핸들러 함수 정의
  const sayHello = e => {
    // alert('박사님 안녕~~');
    // 싱태변수 값을 변경할때는 직접 대입하면 안되고 상태변경함수를 이용해야함.
    // nickname = "척척박사"; (x)
    setNickName('척척박사'); //(o)
  };

  console.log('Hello nickName: ' +nickName);

 

  return (
    <>
        <h1>Hello ~~~ {nickName} </h1>
        <button className="btn" onClick={sayHello}>척척박사</button>
        <button className="btn" onClick={() => {setNickName('척척석사')  }}>척척석사</button>
    </>
  )
}

export default Hello