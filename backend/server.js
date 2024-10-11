import path from 'path';
import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import getAllUsersRoutes from './routes/users.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';

// Variables
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()

// Configurations
dotenv.config()

// Middlewares
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', getAllUsersRoutes)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Initializing the server
server.listen(PORT, () => {
    connectToMongoDB().then(() => {
        console.log(`Listening on port ${PORT}`);
    })
})