import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
	font-size: 24px;
	color: ${props => props.theme.color.text};
`;

export const Menu = () => {
	return (
		<>
			<Logo>Whispering</Logo>
			<span />
			<span />
		</>
	);
};
