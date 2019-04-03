import React from 'react';

import {Wrapper} from './styled';
import Button from "../Button";

const Item = props => {


	return(
		<Wrapper>
			<div>City</div>
			<div>13.8C</div>
			<div>734hPa</div>
			<Button
				type="delete"
				title="Delete"
			/>
		</Wrapper>
	);
}

export default Item;