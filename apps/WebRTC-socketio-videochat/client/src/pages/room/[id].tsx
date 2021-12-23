import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import styled from 'styled-components';

import { useSocket } from '@/hooks/useSocket';
import { Menu, UserBar } from '@/components';

const Container = styled.div`
	padding: 20px;
	background-color: ${props => props.theme.color.grey0};
	height: 100vh;
	width: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 7fr;
  gap: 0px 0px;
  grid-template-areas:
		"header header header"
		"left body right"
		"left body right";
`;

const StyledVideo = styled.video`
	height: 400px;
	width: 600px;
	width: 50%;
	${props => props.grayscale && 'filter: grayscale(1);'};
`;

const Video = ({ peer, user, stream }: any) => {
	const ref = useRef({});

	useEffect(() => {
		if (!stream) {
			peer.on('stream', (stream) => {
				ref.current.srcObject = stream;
			});
		}
	}, []);

	useEffect(() => {
		if (stream) {
			ref.current.srcObject = stream;
		}
	}, [stream]);

	return (
		<div>
			<span style={{ color: 'white' }}>{user.username}</span>
			<StyledVideo playsInline autoPlay ref={ref} muted />
		</div>
	);
};

const usrnm = [
	'Martin',
	'Michal',
	'Petr',
	'Viki',
	'Kuba',
	'Alca',
];

const Room = ({ props }) => {
	const [peers, setPeers] = useState([]);
	const [username] = useState(usrnm[Math.floor(Math.random() * usrnm.length)]);
	const [isSocket, setIsSocket] = useState(false);

	const socketRef = useRef({});
	const userVideo = useRef({});
	const peersRef = useRef([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			socketRef.current = io('http://localhost:5000');
			setIsSocket(true);
		}
	}, []);

	useEffect(() => {
		async function initSocket() {
			const stream = await navigator.mediaDevices?.getUserMedia({ video: true, audio: true });
			userVideo.current.srcObject = stream;

			socketRef.current.on('connect', () => {
				console.log('SOCKETID: ', socketRef.current.id, username);
				socketRef.current.emit('join-room', {
					username,
					roomId: props.query.id,
				});

				socketRef.current.on('users-updated', (restOfUsers) => {
					const filteredPeers = restOfUsers.filter((u) => u.userId !== socketRef.current.id);
					const newPeers = filteredPeers.map((user) => {
						const peer = new Peer({
							initiator: true,
							trickle: false,
							stream,
						});

						peer.on('signal', (signal: any) => {
							socketRef.current.emit('send-signal', {
								user,
								signal,
								socketId: socketRef.current.id,
							});
						});

						peersRef.current.push({
							peerID: user.userId,
							peer,
						});

						return { peer, user };
					});

					setPeers(newPeers);
				});

				socketRef.current.on('user-joined', ({ signal, socketId, user }) => {
					const peer = new Peer({
						initiator: false,
						trickle: false,
						stream,
					});

					peer.on('signal', (peerSignal) => {
						socketRef.current.emit('return-signal', {
							signal: peerSignal,
							callerId: socketId,
						});
					});

					peer.signal(signal);

					peersRef.current.push({
						peerID: socketId,
						peer,
					});

					peer.on('stream', (stream) => {
						setPeers((currPeers) => [...currPeers, { peer, user, stream }]);
					});
				});

				socketRef.current.on('receiving-returned-signal', ({ id, signal }) => {
					const item = peersRef.current.find(p => p.peerID === id);
					item.peer.signal(signal);
				});

				socketRef.current.on('user-disconnected', (disconnectedSocketId) => {
					setPeers((peers) => peers.filter((peer) => peer.user.userId !== disconnectedSocketId));
				});
			});
		}

		if (isSocket  && typeof window !== 'undefined' && username) {
			initSocket();
		}
	}, [isSocket, username]);

	return (
		<Container>
			<Menu />
			<UserBar users={peers.map((peer) => peer.user)} currUser={username} />

			<div>
				<StyledVideo muted ref={userVideo} autoPlay playsInline grayscale />
				{peers.map((peer, index) => {
					return (
						<Video key={index} peer={peer.peer} user={peer.user} stream={peer.stream} />
					);
				})}
			</div>

			<span/>
		</Container>
	);
};

Room.getInitialProps = async (ctx) => {
	return { props: { query: ctx.query }};
};

export default Room;
