import React from 'react'

// props는 부모컴포넌트가 속성값으로 전달한 데이터 객체
const Item = ({ foodInfo }) => {

//   console.log('props: ', props.foodInfo);
//   console.log('foodInfo: ', foodInfo);

  const { foodName:fn, price:p, quantity:q } = foodInfo;

  return (
    <li>음식명: {fn}, 가격: {p}, 수량: {q}</li>
  )
}

export default Item