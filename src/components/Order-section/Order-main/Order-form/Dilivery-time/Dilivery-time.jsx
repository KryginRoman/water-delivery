import React from 'react';

import TimeIntervals from './Time-intervals/Container-time-intervals';
import DataList from './Data-list/Container-Data-list';

import './Dilivery-time.css';

export default () => (
  <div className="dilivery-time">
    <div className="dilivery-time__day">
      <h4 className="dilivery-time__title">День</h4>
      <DataList />
    </div>
    <div className="dilivery-time__hours">
      <h4 className="dilivery-time__title">Время</h4>
      <TimeIntervals />
    </div>
  </div>
)