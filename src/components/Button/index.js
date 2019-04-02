import React from 'react';
import PropTypes from 'prop-types';

import {ButtonStyle} from './styled';

const Button = props => {

	const {title} = props;

	return(
		<ButtonStyle>
			{title}
		</ButtonStyle>
	);
};

Button.propTypes = {
	title: PropTypes.string
};

Button.defaultProps = {
	title: ''
};


export default  Button;