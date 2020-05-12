import {
  TOGGLE_IS_AGREEMENT,
  CHANGE_CLIENT_FIELD,
  RESET_ORDER
} from '../constants';

const initialState = {
  clientDataFields: [
    {
      name: "fioFeild",
      value: "",
    },
    {
      name: "numberFeild",
      value: ""
    },
    {
      name: "emailFeild",
      value: ""
    },
    {
      name: "adressFeild",
      value: ""
    }
  ],
  isAgreement: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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