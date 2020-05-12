import {connect} from 'react-redux';
import ClientData from './Client-data';
import {toggleIsAgreement, changeClientField} from '../../../../../store/actions/actions';

const mapStateToProps = state => {
    const { clientDataFields, isAgreement } = state.clientData;
    const [ fio, phoneNum, email, adress ] = clientDataFields;
    return {
        fio: fio.value,
        phoneNum: phoneNum.value,
        email: email.value,
        adress: adress.value,
        isSucces: isAgreement
    }
}
const mapDispatchToProps = {
    toggleIsAgreement,
    changeClientField
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientData);