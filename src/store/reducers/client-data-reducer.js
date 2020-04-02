import {TOGGLE_IS_AGREEMENT, CHANGE_CLIENT_FIELD, SET_IS_VALID_STATUS_FIELD, RESET_ORDER} from '../constants';

const initialState = {
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
    isAgreement: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_IS_AGREEMENT:
            return {
                ...state,
                isAgreement: !state.isAgreement
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
        case RESET_ORDER:
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}

export default reducer;