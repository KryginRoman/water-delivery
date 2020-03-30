import React from 'react';
import './TextInput.css';

export default class TextInput extends React.Component {
    onChangeHandler = e => {
        const field = e.target;
        const { value, name } = field;
        const isValidValue = this.props.onValidate(field);

        if (!isValidValue) {
            this.props.setValid(name, false);
            this.props.onChangeHandler(name, value);
            return false;
        }
        this.props.setValid(name, true);
        this.props.onChangeHandler(name, value);
    }
    render() {
        const showError = (!this.props.isValid && this.props.isTouched);
        return(
            <input
                className={`${showError ? "error-input": ""} input-default`}
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.props.value}
                onChange={this.onChangeHandler}
            />
        )
    }
}

// export default ({ placeholder, name, value, onChangeHandler }) => {

//     return(
//         <input
//             placeholder={placeholder}
//             name={name}
//             value={value}
//             onChange={onChangeHandler}
//         />
//     )
// }