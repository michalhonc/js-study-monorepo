import client from '../../redis/client';

const ROOMS = 'rooms';
const ROOM = 'room';
const USER = 'user';

class Room {
	public async create(roomId: string) {
		await client.lpushAsync(ROOMS, roomId);

		return client.hmsetAsync(`${ROOM}:${roomId}`, {
			roomId,
			init: false,
			hasUsers: false,
		});
	}

	public async getAll(roomId: string) {
		return await client.hgetallAsync(`${ROOM}:${roomId}`);
	}

	public async get(roomId: string, field: string) {
		return await client.hmgetAsync(`${ROOM}:${roomId}`, field);
	}

	public async roomUsersLength(roomId: string) {
		return await client.llenAsync(`${ROOM}:${roomId}:${USER}`);
	}
}

const singleton = new Room();

export default singleton;
