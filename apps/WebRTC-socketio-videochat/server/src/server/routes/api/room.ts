import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import Room from '../../../redis/api/room';

export function roomRoutes(app: Router) {
	app.post('/create', async (req, res) => {
		const newRoomId = uuidv4();

		try {
			await Room.create(newRoomId);

			res.send({
				id: newRoomId,
			});
		} catch(e) {
			res.send(e);
		}
	});

	return app;
}
