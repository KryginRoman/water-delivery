import React from 'react';
import './Water-card-counter.css';

export default ({ startValue, onIncrement, onDecrement, cardId }) => {
    const onDecrementHandler = e => {
        e.preventDefault();
        onDecrement(cardId);
    }
    const onIncrementHandler = e => {
        e.preventDefault();
        onIncrement(cardId);
    }
    return(
        <div className="water-counter">
            <button className="water-counter__button" onClick={onDecrementHandler}>
                <span className="water-counter__button-line"></span>
            </button>
            <span className="water-counter__value">{startValue}</span>
            <button className="water-counter__button" onClick={onIncrementHandler}>
                <span className="water-counter__button-line"></span>
                <span className="water-counter__button-line vert-line"></span>
            </button>
        </div>
    )
}