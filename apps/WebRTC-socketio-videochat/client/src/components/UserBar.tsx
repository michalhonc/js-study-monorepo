import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	flex-direction: column;
`;

const Circle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.currentUser ? props.theme.color.grey5 : props.theme.color.grey4};
	border-radius: 100%;
	height: 80px;
	width: 80px;
	margin-bottom: 30px;
`;

const Username = styled.span`
	color: ${props => props.theme.color.text};
	font-size: 20px;
`;

interface Props {
	users: {
		username: string;
	}[];
	currUser: string;
}

export const UserBar: FC<Props> = (props) => {
	const users = props.users;
	const currUser = props.currUser;

	return (
		<Container>
			<Circle currentUser>
				<Username>{currUser}</Username>
			</Circle>

			{users.map((user) => (
				<Circle key={user.username}>
					<Username>{user.username}</Username>
				</Circle>
			))}
		</Container>
	);
};
