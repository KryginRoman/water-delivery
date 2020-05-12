import { connect } from 'react-redux';

import WaterTariffs from './Water-tariffs';

import {
  toggleTariffCard,
  increaseCardCount,
  reduceCardCount
} from '../../../../../store/actions/actions';

const mapStateToProps = state => {
  const { tariffCards, selectedCardId } = state.waterCards;
  return {
    cardList: tariffCards,
    selectedCardId: selectedCardId
  }
}
const mapDispatchToProps = {
  toggleTariffCard,
  increaseCardCount,
  reduceCardCount
}

export default connect(mapStateToProps, mapDispatchToProps)(WaterTariffs);