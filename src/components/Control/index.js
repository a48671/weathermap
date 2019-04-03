import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, City, Temperature, Pressure, Delete} from './styled';
import Input from "../Input";

const Control = props => {

	const {sortingItems, sort} = props;

	return(
		<Wrapper>
			<City
				sort={sort}
				onClick={sortingItems}
			>
				<span>City</span>
			</City>
			<Temperature>
				Temperature
			</Temperature>
			<Pressure>
				Pressure
			</Pressure>
			<Delete></Delete>
		</Wrapper>
	);
};

Control.propTypes = {
	sort: PropTypes.string,
	sortingItems: PropTypes.func
};

Control.defaultProps = {
	sort: 'random',
	sortingItems: () => null
}

export default Control;