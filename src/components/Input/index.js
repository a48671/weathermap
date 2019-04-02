import React from 'react';

import {InputCity} from './styled';

const Input = props => {

	const {placeholder} = props;

	return (
		<InputCity
			placeholder={placeholder}
		/>
	);
}

export default  Input;

