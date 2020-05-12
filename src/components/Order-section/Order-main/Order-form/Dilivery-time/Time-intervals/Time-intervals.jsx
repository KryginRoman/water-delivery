import React from 'react';

import TimeInterval from './Time-interval-item/Time-interval';

import './Time-intervals.css';

export default ({ 
  intervalsList, 
  selectedTimeIntervalId, 
  toggleIntervalTime 
}) => {
  return (
    <ul className="interval-list">
      {intervalsList.map(({ from, to, id }) => {
        return (
          <li className="interval-list__item" key={id}>
            <TimeInterval
              from={from}
              to={to}
              checked={id === selectedTimeIntervalId}
              onChange={() => toggleIntervalTime(id)}
            />
          </li>
        )
      })}
    </ul>
  )
}