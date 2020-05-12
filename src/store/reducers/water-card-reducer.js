import {
  TOGGLE_TARIFF_CARD,
  INCREASE_CARD_COUNT,
  REDUCE_CARD_COUNT,
  RESET_ORDER
} from '../constants';

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
  selectedCardId: 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TARIFF_CARD:
      return {
        ...state,
        selectedCardId: action.cardId
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