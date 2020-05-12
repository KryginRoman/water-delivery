import React from 'react';

import ClientData from './Client-data/Container-Client-data';
import WaterTariffs from './Water-tariffs/Container-water-tariffs';
import DiliveryTime from './Dilivery-time/Dilivery-time';

import './Order-form.css';

export default () => (
  <div className="order-form" >
    <div className="order-form__client-data">
      <ClientData />
    </div>
    <div className="order-form__water-tariffs">
      <h3 className="order-form__time-delivery-title">Вода</h3>
      <WaterTariffs />
    </div>
    <div className="order-form__time-delivery">
      <h3 className="order-form__time-delivery-title">Дата и время доставки</h3>
      <DiliveryTime />
    </div>
  </div>
)