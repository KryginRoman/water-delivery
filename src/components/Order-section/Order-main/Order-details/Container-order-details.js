import {connect} from 'react-redux';
import OrderDetails from './Order-details';
import {getVolume, 
        getCount, 
        getInterval, getDateNum, getCurrentMonthName} from '../../../../handlers/handlers';

const mapStateToProps = state => {
    const {clientDataFields: [ , , adressFeild, numberFeild]} = state.clientData;
    const {tariffCards, selectedCardId} = state.waterCards;
    const {intervals, dataList, selectedTimeIntervalId, selectedDayNum} = state.dilivery;
    // const {
    //     clientDataFields: [ , , adressFeild, numberFeild], 
    //     tariffCards,
    //     intervals, 
    //     selectedTimeIntervalId, 
    //     selectedDayNum,
    //     dataList, 
    //     selectedCardId} = state.main;
    return {
        volume: getVolume(tariffCards, selectedCardId),
        count: getCount(tariffCards, selectedCardId),
        interval: getInterval(intervals, selectedTimeIntervalId),
        dayNum: getDateNum(dataList, selectedDayNum),
        monthName: getCurrentMonthName(),
        adress: adressFeild.value,
        phoneNum: numberFeild.value
    }
}

export default connect(mapStateToProps, null)(OrderDetails);