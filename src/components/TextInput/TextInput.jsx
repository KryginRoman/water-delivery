import React, { useState } from 'react';

import './TextInput.css';

export default ({ name, value, placeholder, onChange, onValidate }) => {
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const classList = ["input-default"];

  const onFocusHandler = () => setIsTouched(true);
  const onChangeHandler = ({ target: { value } }) => {
    const fieldValue = value.trim();
    onValidate(fieldValue) ? setIsValid(true) : setIsValid(false);
    onChange(name, fieldValue);
  }

  if (!isValid && isTouched) classList.push("error-input");

  return (
    <input
      className={classList.join(" ")}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
    />
  )
}