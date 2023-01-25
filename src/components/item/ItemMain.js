import React from 'react'
import Item from './Item';

// 음식 메뉴 리스트
const ItemMain = () => {
  // 이 컴포넌트에서 음식 API를 호출해서 받아옴
  const foodArray = [
    {
        foodName: '짜장면',
        price: 6000,
        quantity: 3
    },
    {
        foodName: '탕수육',
        price: 20000,
        quantity: 2
    },
    {
        foodName: '짬뽕',
        price: 7000,
        quantity: 4
    },

  ];

  // 음식배열 수만큼 li태그 생성하기
//   const tagArray = []; // 태그를 저장할 배열
//   const makeLi = () => {
//     for (let food of foodArray) {
//         const {foodName, price, quantity} = food;
//         tagArray.push(<li>음식명: {foodName}, 가격: {price}, 수량: {quantity}</li>);
//     }
//     return tagArray;
//   };

  const tagArray = foodArray.map(food => <Item key={food.foodName} foodInfo={food} abc="메롱" />);

  return (
    <ul>
        {tagArray}
    </ul>
  )
}

export default ItemMain