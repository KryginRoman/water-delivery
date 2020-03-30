import React from 'react';
import TextInput from '../../../../TextInput/TextInput';
import './Client-data.css';
import VectorSVG from './vector.svg';
import { Validator } from '../../../../../handlers/handlers';

export default ({ isAgreement, clientDataFields, toggleIsAgreement, changeClientField, setIsValidStatusField }) => {
    const [ fioFeild, numberFeild, emailFeild, adressFeild ] = clientDataFields;
    const validator = new Validator();
    return(        
        <div className="client-data">
            <div className="client-fio">
                <TextInput 
                    name="fioFeild" 
                    onChangeHandler={changeClientField}
                    onValidate={validator.validateNameField}
                    setValid={setIsValidStatusField}
                    isValid={fioFeild.isValid}
                    isTouched={fioFeild.isTouched}
                    value={fioFeild.value} 
                    placeholder="Ф.И.О"
                />
            </div>
            <div className="client-phone-number">
                <TextInput 
                    name="numberFeild" 
                    onChangeHandler={changeClientField}
                    onValidate={validator.validateNumberField}
                    setValid={setIsValidStatusField}
                    isValid={numberFeild.isValid}
                    isTouched={numberFeild.isTouched}
                    value={numberFeild.value} 
                    placeholder="Укажите номер телефона"
                />
            </div>
            <div className="client-email">
                <TextInput 
                    name="emailFeild" 
                    onChangeHandler={changeClientField}
                    onValidate={validator.validateEmailField}
                    setValid={setIsValidStatusField}
                    isValid={emailFeild.isValid}
                    isTouched={emailFeild.isTouched}
                    value={emailFeild.value} 
                    placeholder="Укажите свой email"
                />
            </div>
            <div className="client-adress">
                <TextInput 
                    name="adressFeild" 
                    onChangeHandler={changeClientField}
                    onValidate={validator.validateAdressField}
                    setValid={setIsValidStatusField}
                    isValid={adressFeild.isValid}
                    isTouched={adressFeild.isTouched}
                    value={adressFeild.value} 
                    placeholder="Укажите адресс доставки"
                />
            </div>
            <div className="client-succes">
                <label className="client-succes__label">
                    <input className="client-succes__checkbox" type="checkbox" onChange={toggleIsAgreement} name="succesFeild" checked={isAgreement} />
                    <span className="client-succes__custom-box">
                        <img className="client-succes__img" src={VectorSVG} alt="chekcbox" />
                    </span>
                    <span className="client-succes__text">Я согласен на <a className="client-succes__text-link" href="#!" target="_blank">обработку персональных данных</a></span>
                </label>
            </div>
        </div>
    )
}