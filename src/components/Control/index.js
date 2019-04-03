import React from 'react';

import {Wrapper, City, Temperature, Pressure, Delete} from './styled';

const Control = props => {
	return(
		<Wrapper>
			<City>
				City
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

export default Control;