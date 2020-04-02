import {connect} from 'react-redux';
import DiliveryTime from './Data-list';
import {toggleDataDay, toggleIsHoliday} from '../../../../../../store/actions/actions';

const mapStateToProps = state => {
    const { dataList, selectedDayNum } = state.dilivery;
    return {
        dataList,
        selectedDayNum,
    }
}
const mapDispatchToProps = {
    toggleDataDay,
    toggleIsHoliday
}

export default connect(mapStateToProps, mapDispatchToProps)(DiliveryTime);