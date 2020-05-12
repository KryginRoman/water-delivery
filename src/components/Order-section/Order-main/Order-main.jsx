import React from 'react';
import './Order-main.css';
import Details from './Order-details/Container-order-details';
import Form from './Order-form/Order-form';

export default ({ isOrder }) => (
  <div className="order-main">
    {isOrder ? <Details /> : <Form />}
  </div>
)