import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, City, Temperature, Pressure, Delete} from './styled';
import Button from "../Button";

const Item = props => {

	const {city, temperature, pressure, index, onClickDelete} = props;

	return(
		<Wrapper>
			<City>{city}</City>
			<Temperature>{temperature}&deg;C</Temperature>
			<Pressure>{pressure}hPa</Pressure>
			<Delete>
				<Button
					type="delete"
					title="Delete"
					onClick={() => {onClickDelete(index)}}
				/>
			</Delete>
		</Wrapper>
	);
};

Item.propTypes = {
	city: PropTypes.string,
	index: PropTypes.number,
	temperature: PropTypes.number,
	pressure: PropTypes.number,
	onClickDelete: PropTypes.func
}

Item.defaultProps = {
	city: '',
	index: 0,
	temperature: 0,
	pressure: 0,
	onClickDelete: () => null
}

export default Item;