import React from 'react';
import WaterCounter from './Water-card-counter/Water-card-counter';
import './Water-card.css';
import largeBottle from './svg/big_bottle.svg';
import smallBottle from './svg/small_bottle.svg';

export default ({
                 waterVolume, 
                 count, setOf, 
                 checked, 
                 cost, 
                 id, 
                 onChange, 
                 increaseCardCount, 
                 reduceCardCount
                }) => {
    const SVGPath = (Number(waterVolume) > 1.5) ? largeBottle : smallBottle;

    return(
        <div className="water-card-wrap">
            <div className="water-card">
                <div className="water-card__header">
                    <span className="water-volume">{`${waterVolume} л`}</span>
                    <span className="water-count">{`${setOf} шт`}</span>
                </div>
                <div className="water-card__footer">
                    <span className="water-cost">{`${cost} Р`}</span>
                </div>
                <label className="water-card-check">
                    <input className="water-card-check__checkbox" onChange={onChange} type="checkbox" checked={checked} />
                    <div className="water-card-check__body"></div>
                </label>
                <div className="water-card__wave">
                    <img src={SVGPath} alt="water"/>
                </div>
            </div>
            {checked
            ? <div className="water-card-counter">
                    <WaterCounter
                        startValue={count}
                        onIncrement={increaseCardCount}
                        onDecrement={reduceCardCount}
                        cardId={id}
                    />
              </div>
            : false}
        </div>
    )
}