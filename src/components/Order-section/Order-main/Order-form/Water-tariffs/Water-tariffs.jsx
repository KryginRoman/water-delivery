import React from 'react';

import WaterCard from '../../../../Water-card/Water-card';

import './Water-tariffs.css';

export default ({
  cardList,
  selectedCardId,
  toggleTariffCard,
  increaseCardCount,
  reduceCardCount
}) => {
  return (
    <ul className="water-tariffs">
      {cardList.map(({ volume, count, cost, id, setOf }) => {
        return (
          <li 
            className="water-tariffs__item" 
            key={id}
          >
            <WaterCard
              waterVolume={volume}
              count={count}
              cost={cost}
              setOf={setOf}
              id={id}
              onChange={() => toggleTariffCard(id)}
              increaseCardCount={increaseCardCount}
              reduceCardCount={reduceCardCount}
              checked={selectedCardId === id}
            />
          </li>
        )
      })}
    </ul>
  )
}