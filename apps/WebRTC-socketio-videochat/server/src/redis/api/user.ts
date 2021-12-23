import client from '../../redis/client';

const ROOM = 'room';
const USER = 'user';

class User {
	public async create(userId: string, username: string, roomId: string) {
		await client.hmsetAsync(`${USER}:${userId}`, {
			userId,
			roomId,
			username,
		});
		return await client.lpushAsync(`${ROOM}:${roomId}:${USER}`, userId);
	}

	public async get(userId: string) {
		return await client.hgetallAsync(`${USER}:${userId}`);
	}

	public async getAll(roomId: string) {
		const userIds = await client.lrangeAsync(`${ROOM}:${roomId}:${USER}`, 0, -1);
		return await Promise.all(userIds.map((userId: string) => {
			return client.hgetallAsync(`${USER}:${userId}`);
		}));
	}

	public async getOther(userId: string, roomId: string) {
		const allUsers = await client.lrangeAsync(`${ROOM}:${roomId}:${USER}`, 0, -1);
		return allUsers.filter((user: string) => user !== userId);
	}

	public async remove(userId: string) {
		const user: any = client.hgetallAsync(`${USER}:${userId}`);
		if (user.roomId) {
			await client.lremAsync(`${ROOM}:${user.roomId}:${USER}`, 0, userId);
		}
		return user;
	}
}

const singleton = new User();

export default singleton;
