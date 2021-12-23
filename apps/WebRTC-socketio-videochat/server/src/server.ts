// @ts-nocheck
require('dotenv').config();

import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);

import cors from 'cors';
import socketio from 'socket.io';
const io = socketio(server, { cors: { origin: '*' } });

app.use(cors());
app.options('*', cors());

const PORT = 5000;
server.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});

export {
	io,
	app,
	server,
};
