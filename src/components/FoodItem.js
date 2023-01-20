import React from 'react'
// props: 부모 컴포넌트가 보내준 데이터가 담긴 객체
// const FoodItem = (props) => {
    const FoodItem = ({foodName, price}) => {
    // console.log('props:',props);
  return (
    <li>
        <a href='#'>{foodName}({price}원)</a>
    </li>
  )
}

export default FoodItem