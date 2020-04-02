import React from 'react';
import WaterButton from '../Water-card-buttons/Water-card-buttons';
import './Water-card-counter.css';

export default ({ startValue, onIncrement, onDecrement, cardId }) => {
    const onDecrementHandler = () => onDecrement(cardId);
    const onIncrementHandler = () => onIncrement(cardId);
    return(
        <div className="water-counter">
            <WaterButton onClick={onDecrementHandler} isIncrement={false} />
            <span className="water-counter__value">{startValue}</span>
            <WaterButton onClick={onIncrementHandler} isIncrement={true} />
        </div>
    )
}