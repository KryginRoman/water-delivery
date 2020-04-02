import TimeIntervals from './Time-intervals';
import {connect} from 'react-redux';
import {toggleIntervalTime} from '../../../../../../store/actions/actions';

const mapStateToProps = state => {
    const { intervals, selectedTimeIntervalId, isHoliday } = state.dilivery;
    return {
        intervalsList: isHoliday ? intervals.filter((el) => el.onlyWeekday !== true): intervals,
        selectedTimeIntervalId,
        isHoliday
    }
}
const mapDispatchToProps = {toggleIntervalTime}

export default connect(mapStateToProps, mapDispatchToProps)(TimeIntervals);