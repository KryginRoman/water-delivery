import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { TOGGLE_IS_ORDER, TOGGLE_TARIFF_CARD, INCREASE_CARD_COUNT,
         REDUCE_CARD_COUNT, TOGGLE_INTERVAL_TIME, TOGGLE_DATA_DAY, 
         TOGGLE_IS_AGREEMENT, RESET_ORDER, TOGGLE_IS_HOLIDAY, CHANGE_CLIENT_FIELD, SET_IS_VALID_STATUS_FIELD } from './actions/actions';
import {GetDateList} from '../handlers/handlers';

const currentDateList = new GetDateList().createDataList();
const currentDayNum = currentDateList[0].dataNumber;

const initialState = {
    tariffCards: [
        {
            volume: "18.9",
            count: 1,
            setOf: 1,
            cost: 220,
            id: 1
        },
        {
            volume: "1.5",
            count: 1,
            setOf: 6,
            cost: 175,
            id: 2
        },
        {
            volume: "0.5",
            count: 1,
            setOf: 12,
            cost: 270,
            id: 3
        }
    ],
    intervals: [
        {
            from: "10:00",
            to: "11:00",
            onlyWeekday: true,
            isCheked: false,
            id: 1
        },
        {
            from: "12:00",
            to: "13:00",
            onlyWeekday: false,
            isCheked: false,
            id: 2
        },
        {
            from: "15:00",
            to: "16:00",
            onlyWeekday: false,
            isCheked: false,
            id: 3
        }
    ],
    dataList: currentDateList,
    clientDataFields: [
        {
            name: "fioFeild",
            value: "",
            isValid: false,
            isTouched: false
        },
        {
            name: "numberFeild",
            value: "",
            isValid: false,
            isTouched: false
        },
        {
            name: "emailFeild",
            value: "",
            isValid: false,
            isTouched: false
        },
        {
            name: "adressFeild",
            value: "",
            isValid: false,
            isTouched: false
        }
    ],
    isAgreement: false,
    isOrder: false,
    isHoliday: false,
    selectedCardId: 1,
    selectedDayNum: currentDayNum,
    selectedTimeIntervalId: 2,
    lastOrderNum: 1
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_IS_ORDER:
            return {
                ...state,
                isOrder: !state.isOrder
            }
        case TOGGLE_TARIFF_CARD:
            return {
                ...state,
                selectedCardId: action.cardId
            }
        case TOGGLE_IS_HOLIDAY:
            return {
                ...state,
                isHoliday: action.isHoliday
            }
        case INCREASE_CARD_COUNT:
            return {
                ...state,
                tariffCards: state.tariffCards.map((card) => {
                    if (action.cardId === card.id) {
                        return {
                            ...card,
                            count: card.count + 1
                        }
                    }

                    return card;
                })
            }
        case TOGGLE_INTERVAL_TIME:
            return {
                ...state,
                selectedTimeIntervalId: action.intervalId
            }
        case TOGGLE_DATA_DAY:
            return {
                ...state,
                selectedDayNum: action.dataNumber
            }
        case REDUCE_CARD_COUNT:
            return {
                ...state,
                tariffCards: state.tariffCards.map((card) => {
                    if ((action.cardId === card.id) && (card.count > 1)) {
                        return {
                            ...card,
                            count: card.count - 1
                        }
                    }

                    return card;
                })
            }
        case TOGGLE_IS_AGREEMENT:
            return {
                ...state,
                isAgreement: !state.isAgreement
            }
        case RESET_ORDER:
            return {
                ...state,
                ...initialState
            }
        case CHANGE_CLIENT_FIELD:
            return {
                ...state,
                clientDataFields: state.clientDataFields.map(field => {
                    if (field.name === action.fieldName) {
                        return {
                            ...field,
                            value: action.fieldValue
                        }
                    }

                    return field
                })
            }
        case SET_IS_VALID_STATUS_FIELD:
            return {
                ...state,
                clientDataFields: state.clientDataFields.map(field => {
                    if (field.name === action.fieldName) {
                        return {
                            ...field,
                            isValid: action.fieldValidStatus,
                            isTouched: true
                        }
                    }

                    return field
                })
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    main: reducer,
    form: formReducer
});

const store = createStore(rootReducer);

window.store = store;

export default store;