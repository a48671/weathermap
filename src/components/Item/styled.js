import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'item'})`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 30px;
	border-bottom: 1px solid ${colors.gray};
	transition: 0.3s;
	&:hover {
		background-color: ${colors.gray};
	}
`;

