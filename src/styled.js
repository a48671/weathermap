import styled from 'styled-components';
import {colors} from './variables/colors';

export const Wrapper = styled.div.attrs({className: 'wrapper'})`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #333;
	min-width: calc(768px + 20px);
`;

export const Dialog = styled.div.attrs({className: 'dialog'})`
	width: calc(100% - 20px);
	max-width: 1024px;
	min-width: 768px;
	border-radius: 10px;
	border: 2px solid ${colors.orange};
	background-color: ${colors.white};
`;

export const Header = styled.h1.attrs({className: 'header'})`
	padding: 10px;
	text-align: center;
	font-size: 24px;
	color: ${colors.orangeDark};
`;

export const AddCity = styled.div.attrs({className: 'add-city'})`
	padding: 20px;
	background-color: ${colors.orange};
`;

export const AddCityContainer = styled.div.attrs({className: 'add-city__container'})`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 600px;
	margin: 0 auto;
`;

export const ListCities = styled.div.attrs({className: 'list-cities'})`
	padding: 10px 0;
`;