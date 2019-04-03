import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'control'})`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${colors.gray};
	color: ${colors.dark};
	transition: 0.3s;
`;

export const City = styled.div.attrs({className: 'control__city'})`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 130px - 130px - 150px);
	cursor: pointer;
	padding: 10px 30px;
	&:hover {
		background-color: ${colors.orange};
		color: ${colors.white};
		&:after {
		border-top: 2px solid ${colors.white};
		border-right: 2px solid ${colors.white};
	}
	}
	&:after {
		display: block;
		content: '';
		width: 10px;
		height: 10px;
		border-top: 2px solid ${colors.dark};
		border-right: 2px solid ${colors.dark};
		transform: rotate(${
			props => {
				if(props.sort === 'asc') return '-45deg';
				if(props.sort === 'desc') return '135deg';
				if(props.sort === 'random') return '45deg';
			}
		});
	}
`;

export const Temperature = styled.div.attrs({className: 'control__temperature'})`
	width: 130px;
	text-align: center;
	padding: 10px 0;
`;

export const Pressure = styled.div.attrs({className: 'control__pressure'})`
	width: 130px;
	text-align: center;
	padding: 10px 0;
`;

export const Delete = styled.div.attrs({className: 'control__delete'})`
	width: 150px;
	padding: 10px 30px 0 0;
`;

