import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export function useSocket() {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const socketConnection = io('http://localhost:5000', {
				transports: ['websocket', 'polling', 'flashsocket'],
			});
			setSocket(socketConnection);
		}
	}, []);

	return socket;
}
