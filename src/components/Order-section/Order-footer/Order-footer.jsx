import React from 'react';
import './Order-footer.css';
import Total from './Order-total/Order-total';
import Button from '../../Button/Button';

const alertText = "Ваш заказ №221 успешно оформлен. В ближайшее время по указанному телефону с Вами свяжется наш менеджер.";

export default ({ isOrder, toggleIsOrder, resetOrder, isAgreement, isAllValid, totalSumm }) => {
    return(
        <div className="order-footer">
            <Total value={totalSumm} />
            {isOrder ? <p className="order-footer__alert">{alertText}</p> : false}
            <div className="order-footer__button">
                {isOrder
                ? <Button
                    textButton="Новый заказ" 
                    type="button" onClick={resetOrder} 
                  />
                : <Button
                    textButton="Заказать воду" 
                    type="button" onClick={toggleIsOrder} 
                    disabled={(!isAgreement || !isAllValid)}
                  />
                }
            </div>
        </div>
    )
}