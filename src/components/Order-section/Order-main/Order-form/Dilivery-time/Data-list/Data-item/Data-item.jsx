import React from 'react';
import './Data-item.css';

export default ({ dataNumber, dayName, isHoliday, onChange, checked }) => {
    const classesList = ["data-item"];
    
    if (isHoliday) classesList.push("data-item_holiday");

    return(
        <label className={classesList.join(" ")}>
            <input type="radio" name="monthDay" value={dataNumber} onChange={onChange} checked={checked} />
            <div className="data-item__body">
                <span className="data-item__data-number">{dataNumber}</span>
                <span className="data-item__day-name">{dayName}</span>
            </div>
        </label>
    )
}