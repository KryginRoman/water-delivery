import {connect} from 'react-redux';
import OrderFooter from './Order-footer';
import {toggleIsOrder, resetOrder} from '../../../store/actions/actions';
import {getTotalSumm, isAllValid} from '../../../handlers/handlers';

const mapStateToProps = state => {
    const { isOrder, isAgreement, tariffCards, selectedCardId, clientDataFields } = state.main;

    return {
        isOrder,
        isAgreement,
        isAllValid: isAllValid(clientDataFields),
        totalSumm: getTotalSumm(tariffCards, selectedCardId)
    }
}

const mapDispatchToProps = {
    toggleIsOrder,
    resetOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderFooter);