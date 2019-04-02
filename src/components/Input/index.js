import React from 'react';
import PropTypes from 'prop-types';

import {InputCity} from './styled';

const Input = props => {

	const {placeholder} = props;

	return (
		<InputCity
			placeholder={placeholder}
		/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string
};

Input.defaultProps = {
	placeholder: ''
}

export default  Input;

