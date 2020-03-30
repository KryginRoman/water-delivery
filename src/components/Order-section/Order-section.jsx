import React from 'react';
import './Order-section.css';
import Header from './Order-title/Order-title';
import Body from './Order-main/Container-order-main';
import Footer from './Order-footer/Container-order-footer';

export default () => {
    return(
        <div className="order-section">
            <Header titleText="Заполните данные" showCheckMark={false} />
            <Body />
            <Footer />
        </div>
    )
}