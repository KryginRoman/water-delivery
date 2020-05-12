import { connect } from 'react-redux';

import OrderSection from './Order-section';

import { changeClientField } from '../../store/actions/actions';

const mapDispatchToProps = {
  changeClientField
}

export default connect(null, mapDispatchToProps)(OrderSection)