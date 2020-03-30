import {connect} from 'react-redux';
import OrderMain from './Order-main';

const mapStateToProps = state => {
    return {
        isOrder: state.main.isOrder
    }
}

export default connect(mapStateToProps, null)(OrderMain);