import React from 'react';

import TextInput from '../../../../TextInput/TextInput';
import Checkbox from '../../../../Checkbox/Checkbox';

import './Client-data.css';

import { Validator } from '../../../../../handlers/handlers';

export default ({
  fio,
  phoneNumber,
  email,
  adress,
  isSucces,
  changeClientField,
  toggleIsAgreement
}) => {
  const validator = new Validator();

  return (
    <div className="client-data">
      <div className="client-fio">
        <TextInput
          name="fioFeild"
          onChange={changeClientField}
          onValidate={validator.validateNameField}
          value={fio}
          placeholder="Ф.И.О"
        />
      </div>
      <div className="client-phone-number">
        <TextInput
          name="numberFeild"
          onChange={changeClientField}
          onValidate={validator.validateNumberField}
          value={phoneNumber}
          placeholder="Укажите номер телефона"
        />
      </div>
      <div className="client-email">
        <TextInput
          name="emailFeild"
          onChange={changeClientField}
          onValidate={validator.validateEmailField}
          value={email}
          placeholder="Укажите свой email"
        />
      </div>
      <div className="client-adress">
        <TextInput
          name="adressFeild"
          onChange={changeClientField}
          onValidate={validator.validateAdressField}
          value={adress}
          placeholder="Укажите адресс доставки"
        />
      </div>
      <div className="client-succes">
        <Checkbox
          checked={isSucces}
          name="succesFeild"
          onChange={toggleIsAgreement}
        >
          <span className="client-succes__text">
            Я согласен на
            <a
              className="client-succes__text-link"
              href="#!"
              target="_blank"
            >
              обработку персональных данных
              </a>
          </span>
        </Checkbox>
      </div>
    </div>
  )
}