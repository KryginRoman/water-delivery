import { connect } from 'react-redux';
import OrderFooter from './Order-footer';
import { toggleIsOrder, resetOrder } from '../../../store/actions/actions';
import { getTotalSumm, isAllValid } from '../../../handlers/handlers';

const mapStateToProps = state => {
  const { isOrder, orderNum } = state.main;
  const { tariffCards, selectedCardId } = state.waterCards;
  const { isAgreement, clientDataFields } = state.clientData;

  return {
    isOrder,
    isAgreement,
    // isAllValid: isAllValid(clientDataFields),
    isAllValid: true,
    totalSumm: getTotalSumm(tariffCards, selectedCardId),
    orderNum
  }
}

const mapDispatchToProps = {
  toggleIsOrder,
  resetOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderFooter);