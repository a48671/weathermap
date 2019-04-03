import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const ButtonStyle = styled.div.attrs({className: 'button'})`
	display: block;
	width: ${props => props.type === 'add' ? '200px' : '120px'};
	height: ${props => props.type === 'add' ? '60px' : '50px'};
	padding: 0 20px;
	line-height: ${props => props.type === 'add' ? '60px' : '50px'};
	font-size: 16px;
	border-radius: 35px;
	background-color: ${props => props.type === 'add' ? colors.orangeDark : 'transparent'};
	color: ${props => props.type === 'add' ? colors.white : colors.orangeDark};
	text-align: center;
	cursor: pointer;
	border: 1px solid ${props => props.type === 'add' ? 'transparent' : colors.orangeDark};
	transition: 0.3s;
	&:hover {
		box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2);
		background-color: ${props => props.type === 'add' ? colors.orangeDark : colors.grayLight};
		border: 1px solid ${props => props.type === 'add' ? 'transparent' : colors.dark};
		color: ${props => props.type === 'add' ? colors.white : colors.dark};
	}
	&:active {
		box-shadow: inset 0 2px 2px rgba(0, 0, 0, .4);
	}
`;

