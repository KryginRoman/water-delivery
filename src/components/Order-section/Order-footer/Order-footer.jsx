import React from 'react';

import Total from './Order-total/Order-total';
import Button from '../../Button/Button';

import './Order-footer.css';

export default ({ 
  isOrder, 
  toggleIsOrder, 
  resetOrder, 
  isAgreement, 
  isAllValid, 
  totalSumm, 
  orderNum 
}) => (
  <div className="order-footer">
      <Total value={totalSumm} />
      {isOrder && (
        <p className="order-footer__alert">
          {`Ваш заказ №${orderNum} успешно оформлен. В ближайшее время по указанному телефону с Вами свяжется наш менеджер.`}
        </p>
      )}
      <div className="order-footer__button">
        {
          <Button
            textButton={isOrder ? "Новый заказ" : "Заказать воду"}
            type="submit"
            onClick={isOrder ? resetOrder : toggleIsOrder}
            disabled={(!isAgreement || !isAllValid)}
          />
        }
      </div>
    </div>
)