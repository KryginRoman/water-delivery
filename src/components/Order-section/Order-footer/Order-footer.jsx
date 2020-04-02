import React from 'react';
import './Order-footer.css';
import Total from './Order-total/Order-total';
import Button from '../../Button/Button';

export default ({ isOrder, toggleIsOrder, resetOrder, isAgreement, isAllValid, totalSumm, orderNum }) => {
    const alertText = `Ваш заказ №${orderNum} успешно оформлен. В ближайшее время по указанному телефону с Вами свяжется наш менеджер.`;
    return (
        <div className="order-footer">
            <Total value={totalSumm} />
            {isOrder ? <p className="order-footer__alert">{alertText}</p> : null}
            <div className="order-footer__button">
                {
                    <Button
                        textButton={isOrder ? "Новый заказ" : "Заказать воду"} 
                        type="button" 
                        onClick={isOrder ? resetOrder: toggleIsOrder}
                        disabled={(!isAgreement || !isAllValid)}
                    />
                }
            </div>
        </div>
    )
}