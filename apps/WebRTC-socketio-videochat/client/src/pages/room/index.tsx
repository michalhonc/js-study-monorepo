import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { v1 as uuid } from 'uuid';

interface CreateRoomRes {
	data: {
		id: string;
	};
}

const CreateRoom = () => {
	const router = useRouter();

	async function createRoom() {
		try {
			// test if is webcam enabled
			await navigator.mediaDevices?.getUserMedia({ video: { width: 1, height: 1 }, audio: true });

			const data: CreateRoomRes = await axios.post('http://localhost:5000/api/v1/room/create');
			router.push(`/room/${data.data.id}`);
		} catch(e) {
			console.log(e);
		}
	}

	return (
		<button onClick={createRoom}>
			New Room
		</button>
	);
};

export default CreateRoom;
