import React from 'react';
import PropTypes from 'prop-types';

import {ButtonStyle} from './styled';

const Button = props => {

	const {title, type, onClick} = props;

	return(
		<ButtonStyle
			onClick={onClick}
			type={type}
		>
			{title}
		</ButtonStyle>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func
};

Button.defaultProps = {
	title: '',
	type: 'add',
	onClick: () => null
};


export default  Button;