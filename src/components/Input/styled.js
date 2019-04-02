import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const InputCity = styled.input.attrs({className: 'input-city'})`
	display: block;
	width: 300px;
	height: 60px;
	padding: 0 20px;
	border-radius: 35px;
	font-size: 16px;
	background-color: ${colors.white};
	border: none;
	outline: none;
`;

