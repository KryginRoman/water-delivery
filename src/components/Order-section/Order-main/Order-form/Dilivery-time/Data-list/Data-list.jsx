import React from 'react';
import Slider from 'react-slick';
import DataItem from './Data-item/Data-item';
import './Data-list.css';

export default ({ selectedDayNum, dataList, toggleDataDay ,toggleIsHoliday }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return(
        <div className="data-list">
            <Slider {...settings}>
                {dataList.map(({ dataNumber, dayName, isHoliday }) => {
                    return (
                        <div className="data-list__item" key={dataNumber}>
                            <DataItem
                                dataNumber={dataNumber}
                                dayName={dayName}
                                isHoliday={isHoliday}
                                toggleDataDay={toggleDataDay}
                                toggleIsHoliday={toggleIsHoliday}
                                checked={dataNumber === selectedDayNum}
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}