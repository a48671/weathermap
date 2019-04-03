import React from 'react';
import PropTypes from 'prop-types';

import {ButtonStyle} from './styled';

const Button = props => {

	const {title, type} = props;

	return(
		<ButtonStyle type={type}>
			{title}
		</ButtonStyle>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string
};

Button.defaultProps = {
	title: '',
	type: 'add'
};


export default  Button;