import React from 'react';

import DetailItem from './Order-detail/Order-detail';

import './Order-details.css';

export default ({
  volume,
  count,
  dayNum,
  monthName,
  interval: { from, to }, adress, phoneNum
}) => (
    <ul className="order-details">
      <li className="order-details__item">
        <DetailItem 
          leftSide={`Бутыль ${volume} л`} 
          rightSide={`${count} шт`} 
        />
      </li>
      <li className="order-details__item">
        <DetailItem 
          leftSide={`${dayNum} ${monthName}`} 
          rightSide={`${from} - ${to}`} 
        />
      </li>
      <li className="order-details__item">
        <DetailItem 
          leftSide="Адресс доставки" 
          rightSide={adress} 
        />
      </li>
      <li className="order-details__item">
        <DetailItem 
          leftSide="Телефон" 
          rightSide={phoneNum} 
        />
      </li>
    </ul>
  )