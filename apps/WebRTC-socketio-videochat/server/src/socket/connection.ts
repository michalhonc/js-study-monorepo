// @ts-nocheck
import { io } from '../server';
import * as socketHandlers from './handlers';

io.sockets.on('connect', onConnect);
const users = {} as Record<string, string>;

function onConnect(socket: any) {
	users[socket.id] = socket.id;

	Object.keys(socketHandlers).map((socketHandler: any) => {
		if (typeof socketHandlers[socketHandler] === 'function') {
			socketHandlers[socketHandler](socket);
		}
	});

	socket.on('disconnect', (reason: any) => {
		delete users[socket.id];
	});
}

export { io };
