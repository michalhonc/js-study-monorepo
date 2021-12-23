import { io } from '../../server';
import User from '../../redis/api/user';

export function signal(socket: any) {
	socket.on('send-signal', async ({
		user, signal, socketId,
	}: any) => {
		console.log(3, 'send-signal: user[n]')
		const currentUser: any = await User.get(socketId);
		io.to(user.userId).emit('user-joined', {
			user: currentUser,
			signal,
			socketId,
		});
	});

	socket.on('return-signal', ({
		callerId, signal,
	}: any) => {
		console.log(5, 'return-signal: ', callerId)
		io.to(callerId).emit('receiving-returned-signal', {
			signal,
			id: socket.id,
		});
	});
}
