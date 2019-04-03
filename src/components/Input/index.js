import React from 'react';
import PropTypes from 'prop-types';

import {InputCity} from './styled';

const Input = props => {

	const {placeholder, inputValue, onChangeInput} = props;

	return (
		<InputCity
			onChange={event => {onChangeInput(event)}}
			value={inputValue}
			placeholder={placeholder}
		/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	inputValue: PropTypes.string,
	onChangeInput: PropTypes.func
};

Input.defaultProps = {
	placeholder: '',
	inputValue: '',
	onChangeInput: () => null
}

export default  Input;

