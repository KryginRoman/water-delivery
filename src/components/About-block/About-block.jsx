import React from 'react';
import './About-block.css';
import Logo from './Logo/Logo';
import Title from './Title/Title';

export default () => {
    return(
        <div className="about-block">
            <Logo />
            <Title titleText="Чистая вода" />
            <p className="description">
                Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. 
                Закажите доставку воды и мы привезем её на дом или в офис.
            </p>
        </div>
    )
}