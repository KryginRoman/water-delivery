import {connect} from 'react-redux';
import ClientData from './Client-data';
import {toggleIsAgreement, changeClientField, setIsValidStatusField} from '../../../../../store/actions/actions';

const mapStateToProps = state => {
    const { clientDataFields, isAgreement } = state.main;

    return {
        clientDataFields,
        isAgreement
    }
}
const mapDispatchToProps = {
    toggleIsAgreement,
    changeClientField,
    setIsValidStatusField
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientData);