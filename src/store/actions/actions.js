export const TOGGLE_IS_ORDER = "TOGGLE_IS_ORDER";
export const TOGGLE_IS_HOLIDAY = "TOGGLE_IS_HOLIDAY";
export const TOGGLE_IS_AGREEMENT = "TOGGLE_IS_AGREEMENT";
export const TOGGLE_TARIFF_CARD = "TOGGLE_TARIFF_CARD";
export const TOGGLE_INTERVAL_TIME = "TOGGLE_INTERVAL_TIME";
export const TOGGLE_DATA_DAY = "TOGGLE_DATA_DAY";
export const SET_IS_VALID_STATUS_FIELD = "SET_IS_VALID_STATUS_FIELD";
export const INCREASE_CARD_COUNT = "INCREASE_CARD_COUNT";
export const REDUCE_CARD_COUNT = "REDUCE_CARD_COUNT";
export const RESET_ORDER = "RESET_ORDER";
export const FORM_AN_ORDER = "FORM_AN_ORDER";
export const CHANGE_CLIENT_FIELD = "CHANGE_CLIENT_FIELD";

export const toggleIsOrder = () => {
    return {
        type: TOGGLE_IS_ORDER
    }
}

export const toggleIsHoliday = isHoliday => {
    return {
        type: TOGGLE_IS_HOLIDAY,
        isHoliday
    }
}

export const toggleIsAgreement = () => {
    return {
        type: TOGGLE_IS_AGREEMENT
    }
}

export const toggleTariffCard = cardId => {
    return {
        type: TOGGLE_TARIFF_CARD,
        cardId
    }
}

export const toggleIntervalTime = intervalId => {
    return {
        type: TOGGLE_INTERVAL_TIME,
        intervalId
    }
}

export const toggleDataDay = dataNumber => {
    return {
        type: TOGGLE_DATA_DAY,
        dataNumber
    }
}

export const setIsValidStatusField = (fieldName, fieldValidStatus) => {
    return {
        type: SET_IS_VALID_STATUS_FIELD,
        fieldName,
        fieldValidStatus
    }
}

export const increaseCardCount = cardId => {
    return {
        type: INCREASE_CARD_COUNT,
        cardId
    }
}

export const reduceCardCount = cardId => {
    return {
        type: REDUCE_CARD_COUNT,
        cardId
    }
}

export const resetOrder = () => {
    return {
        type: RESET_ORDER
    }
}

export const formAnOrder = () => {
    return {
        type: FORM_AN_ORDER
    }
}

export const changeClientField = (fieldName, fieldValue) => {
    return {
        type: CHANGE_CLIENT_FIELD,
        fieldName,
        fieldValue
    }
}