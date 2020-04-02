import React from 'react';
import './Water-card-buttons.css';

export default ({ onClick, isIncrement }) => {
    const classesList = ["water-button"];

    isIncrement ? classesList.push("water-button_incerement") :  classesList.push("water-button_decerement");

    return (
        <button type="button" className={classesList.join(" ")} onClick={onClick}/>
    )
}