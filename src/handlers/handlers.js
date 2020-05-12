export const getTotalSumm = (cards, id) => {
    let sum = 0;

    cards.forEach((card) => {
        if (card.id === id) {
            sum += (card.cost * card.count);
        }
    });

    return sum;
}

export const getVolume = (cards, id) => {
    let volume = 0;

    cards.forEach((card) => {
        if (card.id === id) {
            volume = Number(card.volume);
        }
    });

    return volume
}

export const  getCount = (cards, id) => {
    let count = 0;

    cards.forEach((card) => {
        if (card.id === id) {
            count = card.count;
        }
    });

    return count
}

export const getInterval = (inetrvals, id) => {
    let intervalObject = {
        from: 0,
        to: 0
    };

    inetrvals.forEach((inetrval) => {
        if (inetrval.id === id) {
            intervalObject.from = inetrval.from;
            intervalObject.to = inetrval.to;
        }
    });

    return intervalObject
}

export const getDateNum = (dateList, dayNumber) => {
    let dateNum = 0;

    dateList.forEach((dateItem) => {
        if (dateItem.dataNumber === dayNumber) {
            dateNum = dateItem.dataNumber;
        }
    });
    return dateNum
}

export const getCurrentMonthName = () => {
    const monthNames = [
        "Январь", 
        "Февраль", 
        "Март", 
        "Апрель", 
        "Май", 
        "Июнь", 
        "Июль", 
        "Август", 
        "Сентябрь", 
        "Октябрь", 
        "Ноябрь", 
        "Декабрь"
    ];
    const currentMonthNum = new Date().getMonth();

    return monthNames[currentMonthNum];
}

export const isAllValid = (fields) => {
    return fields.every(field => field.isValid)
}

export class GetDateList {
    constructor() {
        this._dateList = [];
        this._maxLength = 10;
    }
    getDayNum(date) {
        const dayNum = date.getDay();    
        return (dayNum === 0) ? 7 : dayNum;
    }
    getDayName(dayNum) {
        const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        return dayNames[dayNum - 1];
    }
    createDateObj(dataNumber, dayName, isHoliday) {
      return {dataNumber, dayName, isHoliday}
    }
    createDataList() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDayOrder = currentDate.getDate();
        const lastDateInList = currentDayOrder + this._maxLength;
        
        for (let i = currentDayOrder; i <= lastDateInList; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const dayNum = this.getDayNum(date);
            const dayName = this.getDayName(dayNum);
            const dataNumber = date.getDate();
            const isHoliday = (dayName === "Сб") || (dayName === "Вс");
            const dayObj = this.createDateObj(dataNumber, dayName, isHoliday);
                
            this._dateList.push(dayObj);
        }
        
        return this._dateList;
    }
  }

export class Validator {
    validateField = (value, regExp) => {
        return regExp.test(value)
    }
    validateNameField = (value) => {
        return this.validateField(value, /^[a-zа-яё]+$/i);
    }
    validateNumberField = (value) => {
        return this.validateField(value, /^[0-9\-()]+$/g);
    }
    validateEmailField = (value) => {
        return this.validateField(value, /^[a-zа-яё]+$/i);
    }
    validateAdressField = (value) => {
        return this.validateField(value, /^[a-zа-яё]+$/i);
    }
}