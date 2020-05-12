import { combineReducers } from 'redux';
import clientReducer from './client-data-reducer';
import cardReducer from './water-card-reducer';
import diliveryReducer from './dilivery-reducer';
import mainReducer from './main-reducer';

const rootReducer = combineReducers({
  clientData: clientReducer,
  waterCards: cardReducer,
  dilivery: diliveryReducer,
  main: mainReducer
})

export default rootReducer;