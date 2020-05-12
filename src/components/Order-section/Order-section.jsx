import React from 'react';

import Header from './Order-title/Order-title';
import Body from './Order-main/Container-order-main';
import Footer from './Order-footer/Container-order-footer';

import './Order-section.css';

export default ({ changeClientField }) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log("submited")
  }

  return (
    <div className="order-section">
      <Header
        titleText="Заполните данные"
        showCheckMark={false}
      />
      <form onSubmit={onSubmitHandler}>
        <Body />
        <Footer />
      </form>
    </div>
  )
}