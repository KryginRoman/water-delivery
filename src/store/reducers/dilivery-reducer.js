import {
  TOGGLE_INTERVAL_TIME,
  TOGGLE_DATA_DAY,
  TOGGLE_IS_HOLIDAY,
  RESET_ORDER
} from '../constants';
import { GetDateList } from '../../handlers/handlers';

const dataList = new GetDateList().createDataList();
const selectedDayNum = dataList[0].dataNumber;
const isHoliday = dataList[0].isHoliday;

const initialState = {
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
  dataList,
  selectedDayNum,
  selectedTimeIntervalId: 2,
  isHoliday
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DATA_DAY:
      return {
        ...state,
        selectedDayNum: action.dataNumber
      }
    case TOGGLE_INTERVAL_TIME:
      return {
        ...state,
        selectedTimeIntervalId: action.intervalId
      }
    case TOGGLE_IS_HOLIDAY:
      return {
        ...state,
        isHoliday: action.isHoliday
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