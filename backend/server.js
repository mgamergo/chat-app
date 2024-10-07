import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import getAllUsersRoutes from './routes/users.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';

// Variables
const app = express()
const PORT = process.env.PORT || 3000;

// Configurations
dotenv.config()

// Middlewares
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', getAllUsersRoutes)

// Initializing the server
app.listen(PORT, () => {
    connectToMongoDB().then(() => {
        console.log(`Listening on port ${PORT}`);
    })
})