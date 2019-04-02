import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const InputCity = styled.input.attrs({className: 'input-city'})`
	display: block;
	width: 350px;
	height: 60px;
	padding: 0 30px;
	border-radius: 35px;
	font-size: 16px;
	color: ${colors.dark};
	background-color: ${colors.white};
	border: none;
	outline: none;
	border: 1px solid transparent;
	transition: .3s;
	&:focus {
		border: 1px solid ${colors.orangeDark};
	}
`;

