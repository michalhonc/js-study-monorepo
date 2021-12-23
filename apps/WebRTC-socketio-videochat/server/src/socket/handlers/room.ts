import { io } from '../../server';
import Room from '../../redis/api/room';
import User from '../../redis/api/user';

export function room(socket: any) {
	socket.on('join-room', async ({ roomId, username }: any) => {
		const currRoom = await Room.getAll(roomId);
		if (!currRoom) {
			socket.disconnect();
			return;
		}

		let users: any = await User.getAll(roomId);

		if (users.length === 0) {
			await User.create(socket.id, username, roomId);
		} else {
			await User.create(socket.id, username, roomId);
			users = await User.getAll(roomId);
			socket.emit('users-updated', users);
		}
	});

	socket.on('disconnect', async () => {
		console.log('disconnect', socket.id)
		const roomId = await User.remove(socket.id);
		io.of('/').emit('user-disconnected', socket.id);
	});
}
