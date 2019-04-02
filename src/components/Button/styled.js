import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const ButtonStyle = styled.div.attrs({className: 'button'})`
	display: block;
	width: 200px;
	height: 60px;
	padding: 0 20px;
	line-height: 60px;
	font-size: 16px;
	border-radius: 35px;
	background-color: ${colors.orangeDark};
	color: ${colors.white};
	text-align: center;
	cursor: pointer;
	border: 1px solid transparent;
	transition: 0.3s;
	&:hover {
		box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2);
	}
	&:active {
		box-shadow: inset 0 2px 2px rgba(0, 0, 0, .4);
	}
`;

