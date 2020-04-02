import {TOGGLE_IS_ORDER, RESET_ORDER} from '../constants';

const initialState = {
    orderNum: 1,
    isOrder: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_IS_ORDER:
            return {
                ...state,
                isOrder: !state.isOrder
            }
        case RESET_ORDER:
            return {
                ...state,
                isOrder: false,
                orderNum: state.orderNum + 1
            }
        default:
            return state;
    }
}

export default reducer;