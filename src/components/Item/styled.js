import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'item'})`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${colors.dark};
	border-bottom: 1px solid ${colors.gray};
	transition: 0.3s;
`;

export const City = styled.div.attrs({className: 'item__city'})`
	width: calc(100% - 130px - 130px - 150px);
	padding: 15px 0 15px 30px;
`;

export const Temperature = styled.div.attrs({className: 'item__temperature'})`
	width: 130px;
	text-align: center;
	padding: 15px 0;
`;

export const Pressure = styled.div.attrs({className: 'item__pressure'})`
	width: 130px;
	text-align: center;
	padding: 15px 0;
`;

export const Delete = styled.div.attrs({className: 'item__delete'})`
	width: 150px;
	padding: 15px 30px 15px 0;
`;

