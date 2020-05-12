import {
  TOGGLE_IS_ORDER, TOGGLE_IS_HOLIDAY, TOGGLE_IS_AGREEMENT,
  TOGGLE_TARIFF_CARD, TOGGLE_INTERVAL_TIME, TOGGLE_DATA_DAY, 
  INCREASE_CARD_COUNT, REDUCE_CARD_COUNT,
  RESET_ORDER, CHANGE_CLIENT_FIELD
} from '../constants';

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

export const changeClientField = (fieldName, fieldValue) => {
  return {
    type: CHANGE_CLIENT_FIELD,
    fieldName,
    fieldValue
  }
}

export const resetOrder = () => {
  return {
    type: RESET_ORDER
  }
}