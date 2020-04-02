import React from 'react';
import './Water-tariffs.css';
import WaterCard from '../../../../Water-card/Water-card';

export default ({ cardList, selectedCardId, toggleTariffCard, increaseCardCount, reduceCardCount }) => {
    return(
        <ul className="water-tariffs">
            {cardList.map(({ volume, count, cost, id, setOf }) => {
                const onChange = (e) => {
                    toggleTariffCard(id);
                }
                return(
                    <li className="water-tariffs__item" key={id}>
                        <WaterCard
                            waterVolume={volume}
                            count={count}
                            cost={cost}
                            setOf={setOf}
                            id={id}
                            onChange={onChange}
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